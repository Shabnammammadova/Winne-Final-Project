import express, { Request, Response } from "express";
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2025-01-27.acacia",
}); router.post(
    "/",
    express.json({ type: "application/json" }),
    async (req: any, res: any) => {
        let data;
        let eventType;
        let webhookSecret;

        if (webhookSecret) {
            // Retrieve the event by verifying the signature using the raw body and secret.
            let event;
            let signature: any = req.headers["stripe-signature"];
            try {
                event = stripe.webhooks.constructEvent(
                    req.body,
                    signature,
                    webhookSecret
                );

            } catch (err) {
                console.log(`⚠️  Webhook signature verification failed:  ${err}`);
                return res.sendStatus(400);
            }
            // Extract the object from the event.
            data = event.data.object;
            eventType = event.type;
        } else {
            // Webhook signing is recommended, but if the secret is not configured in `config.js`,
            // retrieve the event data directly from the request body.
            data = req.body.data.object;
            eventType = req.body.type;
        }

        // Handle the checkout.session.completed event
        if (eventType === "checkout.session.completed") {
            stripe.customers
                .retrieve(data.customer)
                .then(async (customer) => {
                    try {
                        // CREATE ORDER
                        // const order=new Order
                        // createOrder(customer, data);
                        console.log("Ordered");
                        res.status(200).json({ message: 'Order created', data: data })
                        res.status(200).send("Order created")
                    } catch (err) {
                        console.log(err);
                    }
                })
                .catch((err) => console.log(err.message));
        }

        res.status(200).end();
    }
);


export default router;
