import express, { Request, Response } from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
import order from "../mongoose/schemas/order";

dotenv.config();
const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2025-01-27.acacia",
});
router.post("/", express.raw({ type: "application/json" }), async (req: any, res: any) => {
    const sig = req.headers["stripe-signature"];

    try {
        const event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET as string);
        console.log("Event received:", event.type);

        if (event.type === "checkout.session.completed") {
            const session = event.data.object;
            const items = session.metadata?.cart ? JSON.parse(session.metadata.cart) : [];
            const totalAmount = session.amount_total ? session.amount_total / 100 : 0;

            const newOrder = new order({
                user: session.metadata?.userId,
                products: items,
                total: totalAmount,
                status: "approved",
                createdAt: new Date(),
            });

            await newOrder.save();
            console.log("✅ Order created:", newOrder);
        }

        res.status(200).send("Webhook received");
    } catch (err: any) {
        console.error("❌ Webhook Error:", err);
        res.status(400).send(`Webhook Error: ${err.message}`);
    }
});



export default router;
