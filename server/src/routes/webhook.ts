import express, { Request, Response } from "express";
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2025-01-27.acacia",
});
router.post("/", express.raw({ type: "application/json" }), async (req: Request, res: Response): Promise<void> => {
    try {
        const sig = req.headers["stripe-signature"];
        if (!sig) {
            res.status(400).send("Missing stripe signature");
            return;
        }

        const event = await stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET!);

        console.log("Received event:", event);

        res.status(200).json({ received: true });
    } catch (error: any) {
        console.error("Webhook error:", error.message);
        res.status(400).send(`Webhook Error: ${error.message}`);
    }
});


export default router;
