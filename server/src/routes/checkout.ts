import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
import cors from "cors";
import Order from "../mongoose/schemas/order";
import { CartItem } from "../types/schema";

dotenv.config();
const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2025-01-27.acacia",
});

router.use(cors({ origin: process.env.CLIENT_URL }));

router.post("/", async (req, res) => {
    const customer = await stripe.customers.create({
        metadata: {
            userID: req.body.userID,
            cart: JSON.stringify(req.body.cartItems),
        },
    });

    try {
        const { items } = req.body;

        if (!items || items.length === 0) {
            res.status(400).json({ error: "Basket is empty!" });
            return;
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
            shipping_address_collection: {
                allowed_countries: ["US", "CA", "KE"],
            },
            shipping_options: [
                {
                    shipping_rate_data: {
                        type: "fixed_amount",
                        fixed_amount: {
                            amount: 0,
                            currency: "usd",
                        },
                        display_name: "Free shipping",
                        delivery_estimate: {
                            minimum: {
                                unit: "business_day",
                                value: 5,
                            },
                            maximum: {
                                unit: "business_day",
                                value: 7,
                            },
                        },
                    },
                },
                {
                    shipping_rate_data: {
                        type: "fixed_amount",
                        fixed_amount: {
                            amount: 1500,
                            currency: "usd",
                        },
                        display_name: "Next day air",
                        delivery_estimate: {
                            minimum: {
                                unit: "business_day",
                                value: 1,
                            },
                            maximum: {
                                unit: "business_day",
                                value: 1,
                            },
                        },
                    },
                },
            ],
            phone_number_collection: {
                enabled: true,
            },
            customer: customer.id,
            mode: "payment",
            success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.CLIENT_URL}/cancel`,
        });

        res.status(200).json({ sessionId: session.id });
    } catch (error: any) {
        console.error("Stripe Error:", error);
        res.status(500).json({ error: error.message });
    }
});

const createOrder = async (customer: Stripe.Customer, data: any) => {
    console.log("Customer Metadata:", customer.metadata);
    console.log("Stripe session info:", data);

    if (!customer.metadata.cart) {
        return;
    }

    const items = JSON.parse(customer.metadata.cart);
    console.log("Order products:", items);

    const productIds: string[] = items.map((item: CartItem) => item.productId._id);

    const newOrder = new Order({
        user: customer.metadata.userID,
        customer: data.customer,
        paymentIntentId: data.payment_intent,
        products: productIds,
        total: data.amount_total,
        status: data.payment_status,
        createdAt: new Date(),
    });

    try {
        const saveOrder = await newOrder.save();
        console.log("Order success:", saveOrder);
    } catch (err) {
        console.log("Order error:", err);
    }
};

export default router;
