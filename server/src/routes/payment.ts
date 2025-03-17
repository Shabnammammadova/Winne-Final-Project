import express from "express";
import Stripe from "stripe";
import mongoose from "mongoose";
import Order from "../mongoose/schemas/order";
import User from "../mongoose/schemas/user";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2025-01-27.acacia",
});

const router = express.Router();

router.post("/verify", async (req: any, res: any) => {
    const { sessionId } = req.body;

    if (!sessionId) {
        return res.status(400).json({ success: false, message: "Session ID is required" });
    }

    try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);

        if (!session || !session.metadata?.userID || session.amount_total === null || session.payment_status !== "paid") {
            return res.status(400).json({ success: false, message: "Invalid session data" });
        }

        let productsData = [];
        try {
            productsData = JSON.parse(session.metadata.products || "[]");
            if (!Array.isArray(productsData) || productsData.length === 0) {
                return res.status(400).json({ success: false, message: "Products array is empty" });
            }
        } catch (error) {
            return res.status(400).json({ success: false, message: "Invalid products data format" });
        }

        const user = await User.findById(session.metadata.userID).populate("orders");
        if (!user) {
            return res.status(400).json({ success: false, message: "User not found" });
        }

        const orders = [];

        for (const productData of productsData) {
            if (!productData?.productId || !mongoose.Types.ObjectId.isValid(productData.productId)) {
                return res.status(400).json({ success: false, message: "Invalid product ID" });
            }

            const productId = new mongoose.Types.ObjectId(productData.productId);


            const existingOrder = await Order.findOne({
                user: session.metadata.userID,
                product: productId,
                payment: "completed",
            });

            if (existingOrder) {
                // console.log("existingorder:", existingOrder);
                continue;
            }

            // console.log(" new order", productData);
            const newOrder = new Order({
                user: session.metadata.userID,
                product: productId,
                total: (session.amount_total / 100) * (productData?.quantity || 1),
                startDate: new Date(),
                endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
                customer: session.metadata.userID,
                payment: "completed",
            });

            orders.push(newOrder);
            await newOrder.save();


            const existingItem = user.basket.find(item => item.productId?.toString() === productId.toString());
            if (existingItem) {
                existingItem.quantity += productData.quantity || 1;
            } else {
                user.basket.push({ productId, quantity: productData?.quantity || 1 });
            }

            user.orders.push(newOrder._id);
        }

        user.basket.forEach((item) => {
            if (!item.productId) {
                item.set("productId", new mongoose.Types.ObjectId());
            }
        });

        await user.save();
        // console.log("✅ Fixed basket with missing productId:", user.basket);

        res.json({ success: true, message: "Orders verified and saved", orders });
    } catch (error) {
        console.error("Error verifying payment:", error);
        res.status(500).json({ success: false, message: "Payment verification failed" });
    }
});

export default router;
