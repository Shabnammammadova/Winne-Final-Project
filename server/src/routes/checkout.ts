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

router.post("/", async (req, res) => {
    try {
        const { items } = req.body;

        if (!items || items.length === 0) {
            res.status(400).json({ error: "Basket is empty!" });
            return
        }

        const line_items = items.map((item: any) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.productId.name,
                },
                unit_amount: (item.productId.price - (item.productId.discount || 0)) * 100,
            },
            quantity: item.quantity,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items,
            mode: "payment",
            success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.CLIENT_URL}/cancel`,
        });
        const order = {
            items,
            total: items.reduce(
                (sum: number, item: { productId: { price: number; discount?: number }; quantity: number }) =>
                    sum + (item.productId.price - (item.productId.discount || 0)) * item.quantity,
                0
            ),
            status: "pending",
            createdAt: new Date().toISOString(),
        };


        res.status(200).json({ sessionId: session.id, order });

    } catch (error: any) {
        console.error("Stripe Error:", error);
        res.status(500).json({ error: error.message });
    }
});

export default router;

