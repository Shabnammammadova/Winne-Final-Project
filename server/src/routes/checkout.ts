import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2025-01-27.acacia",
});

router.use(cors({ origin: process.env.CLIENT_URL }));

router.post("/", async (req: any, res: any) => {
    try {
        const { items, userID, startDate, endDate } = req.body;

        console.log("Received userID:", userID);

        if (!userID) {
            return res.status(400).json({ error: "User ID is missing!" });
        }

        if (!items || items.length === 0) {
            return res.status(400).json({ error: "Basket is empty!" });
        }


        let currentDate = new Date();
        let nextDay = new Date(currentDate);
        nextDay.setDate(currentDate.getDate() + 1);

        const finalStartDate = startDate ? new Date(startDate) : currentDate;
        const finalEndDate = endDate ? new Date(endDate) : nextDay;



        const line_items = items.map((item: any) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    image: item.productId.image,
                    name: item.productId.name,
                },
                unit_amount: Math.round((item.productId.price - (item.productId.discount || 0)) * 100),
            },
            quantity: item.quantity,
        }));


        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items,
            mode: "payment",
            success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: process.env.CLIENT_URL ? `${process.env.CLIENT_URL}/cancel` : "https://example.com/cancel",
            metadata: {
                userID: String(userID),
                startDate: finalStartDate.toISOString(),
                endDate: finalEndDate.toISOString(),
                products: JSON.stringify(items.map((item: any) => ({
                    productId: item.productId._id,
                    name: item.productId.name,
                    image: item.productId.image,
                    price: item.productId.price,
                    quantity: item.quantity,
                }))),
            },
        });


        console.log("Created Stripe session metadata:", session.metadata);
        res.status(200).json({ sessionId: session.id });
    } catch (error: any) {
        console.error("Stripe Error:", error);
        res.status(500).json({ error: error.message });
    }
});

export default router;
