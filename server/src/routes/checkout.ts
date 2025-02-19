import { Router } from "express"
import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
import cors from "cors";
import { createOrderSchema } from "../validation/order";
import Order from "../mongoose/schemas/order";


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
            cart: JSON.stringify(req.body.cartItems)
        }
    })
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
            shipping_address_collection: {
                allowed_countries: ["US", "CA", "KE"]
            },
            shipping_options: [
                {
                    shipping_rate_data: {
                        type: "fixed_amount",
                        fixed_amount: {
                            amount: 0,
                            currency: "usd"
                        },
                        display_name: "Free shipping",
                        delivery_estimate: {
                            minimum: {
                                unit: "business_day",
                                value: 5,
                            },
                            maximum: {
                                unit: "business_day",
                                value: 7
                            }
                        },
                    }
                },
                {
                    shipping_rate_data: {
                        type: "fixed_amount",
                        fixed_amount: {
                            amount: 1500,
                            currency: "usd"
                        },
                        display_name: "Next day air",
                        delivery_estimate: {
                            minimum: {
                                unit: "business_day",
                                value: 1,
                            },
                            maximum: {
                                unit: "business_day",
                                value: 1
                            }
                        },

                    },
                }
            ],
            phone_number_collection: {
                enabled: true,
            },
            customer: customer.id,
            //line_items

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



//Create Order


const createOrder = async (customer: Stripe.Customer, data: any) => {
    const items = customer.metadata.cart ? JSON.parse(customer.metadata.cart) : [];

    const productIds = items.map((item: any) => item.productId._id);

    const newOrder = new Order({
        user: customer.metadata.userID,
        customer: data.customer,
        paymentIntentId: data.payment_intent,
        products: productIds,
        total: data.amount_total,
        status: data.status
    });

    try {
        const saveOrder = await newOrder.save();
        console.log("Order:", saveOrder);
    } catch (err) {
        console.log("Error saving order:", err);
    }
}


let endpointSecret;

endpointSecret = "whsec_d172615868582c70fef15f790d0dc6c1a53d5d6884bad355961631da7f554997"


router.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
    const sig = req.headers['stripe-signature'];

    let data: any;
    let eventType: string | undefined;

    if (endpointSecret) {
        let event: Stripe.Event | undefined;
        try {
            if (!sig) {
                throw new Error("Missing Stripe signature");
            }

            event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret) as Stripe.Event;
            console.log("Webhook verified");
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Unknown error";
            console.log(`Webhook Error: ${errorMessage}`);

            res.status(400).send(`Webhook Error: ${errorMessage}`);
            return;
        }

        if (event) {
            data = event.data.object;
            eventType = event.type;
        }
    } else {
        data = req.body.data?.object;
        eventType = req.body.type;
    }

    if (!eventType) {
        res.status(400).send("Invalid event type");
        return;
    }

    switch (eventType) {
        case "payment_intent.succeeded":
            const paymentIntent = data;
            break;
        default:
            console.log(`Unhandled event type ${eventType}`);
    }

    if (eventType === "checkout.session.completed") {
        // stripe.customers.retrieve(data.customer as string)
        //     .then((customer) => {
        //         createOrder(customer, data)
        //     })
        //     .catch((err) => console.log(err instanceof Error ? err.message : "Unknown error"));
        stripe.customers.retrieve(data.customer as string)
            .then((customerResponse) => {
                if (customerResponse.deleted) {
                    console.log("Customer was deleted");
                    return;
                }
                createOrder(customerResponse, data);
            })
            .catch((err) => console.log(err instanceof Error ? err.message : "Unknown error"));

    }

    res.status(200).end();
});


export default router