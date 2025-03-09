// import express from "express";
// import Stripe from "stripe";
// import dotenv from "dotenv";
// import Order from "../mongoose/schemas/order"; // Order modeli import edilir
// import { CartItem } from "../types/schema"; // CartItem interfeysini import et

// dotenv.config();

// const router = express.Router();
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
//     apiVersion: "2025-01-27.acacia",
// });

// router.post(
//     "/webhook",
//     express.raw({ type: "application/json" }),
//     async (req: any, res: any) => {
//         const sig = req.headers["stripe-signature"];

//         if (!sig) {
//             console.error("❌ Missing Stripe signature header.");
//             return res.status(400).send("Webhook Error: Missing Stripe signature.");
//         }

//         let event;

//         try {
//             event = stripe.webhooks.constructEvent(
//                 req.body,
//                 sig,
//                 process.env.STRIPE_WEBHOOK_SECRET as string
//             );

//             console.log("✅ Webhook received:", event.type);

//             if (event.type === "checkout.session.completed") {
//                 const session = event.data.object as Stripe.Checkout.Session;

//                 // Stripe-də customer məlumatlarını əldə edirik
//                 const customer = await stripe.customers.retrieve(session.customer as string);

//                 // Order yaradılması üçün funksiyanı çağırırıq
//                 await createOrder(customer as Stripe.Customer, session);
//             }

//             res.status(200).send("Webhook received successfully");
//         } catch (err: any) {
//             console.error("❌ Webhook Error:", err.message);
//             res.status(400).send(`Webhook Error: ${err.message}`);
//         }
//     }
// );

// // ✅ Order yaratmaq üçün createOrder funksiyası əlavə edildi
// const createOrder = async (customer: Stripe.Customer, data: Stripe.Checkout.Session) => {
//     console.log("Customer Metadata:", customer.metadata);
//     console.log("Stripe session info:", data);

//     if (!customer.metadata.cart) {
//         console.error("❌ No cart data found in metadata.");
//         return;
//     }

//     const items = JSON.parse(customer.metadata.cart) as CartItem[];
//     console.log("Order products:", items);

//     const productIds: string[] = items.map((item: CartItem) => item.productId._id);

//     const newOrder = new Order({
//         user: customer.metadata.userID,
//         customer: data.customer,
//         paymentIntentId: data.payment_intent,
//         products: productIds,
//         total: data.amount_total,
//         status: data.payment_status,
//         createdAt: new Date(),
//     });

//     try {
//         const savedOrder = await newOrder.save();
//         console.log("✅ Order successfully created:", savedOrder);
//     } catch (err) {
//         console.error("❌ Order creation failed:", err);
//     }
// };

// export default router;
