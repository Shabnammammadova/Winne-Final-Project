import express from "express";
import Stripe from "stripe";

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2025-01-27.acacia",
});

router.post(
    "/webhook",
    express.raw({ type: "application/json" }),
    async (req: any, res: any) => {
        const sig = req.headers["stripe-signature"] as string;

        if (!sig) {
            console.error("❌ Missing Stripe signature header.");
            return res.status(400).send("Webhook Error: Missing Stripe signature.");
        }

        let event;

        try {

            event = stripe.webhooks.constructEvent(
                req.body,
                sig,
                process.env.STRIPE_WEBHOOK_SECRET as string
            );

            console.log("✅ Webhook received:", event.type);

            if (event.type === "checkout.session.completed") {
                const session = event.data.object as Stripe.Checkout.Session;
                console.log("✅ Session completed:", session);
            }

            res.status(200).send("Webhook received successfully");
        } catch (err: any) {
            console.error("❌ Webhook Error:", err.message);
            res.status(400).send(`Webhook Error: ${err.message}`);
        }
    }
);

export default router;
