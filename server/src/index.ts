import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import cors from "cors";

import { createServer } from 'node:http';

import "./auth/local-strategy"
import "./auth/google-strategy"
import "./auth/github-strategy"
import authRoutes from "./routes/auth";
import categoryRoutes from "./routes/category"
import productRoutes from "./routes/product"
import blogRoutes from "./routes/blog"
import orderRoutes from "./routes/order"
import favoriteRoutes from "./routes/favorite"
import basketRoutes from "./routes/basket"
import path from "path";



dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
const server = createServer(app);




app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);
app.use(
    session({
        secret: process.env.SESSION_SECRET!,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24,
        },
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes)
app.use("/category", categoryRoutes)
app.use("/product", productRoutes)
app.use("/blog", blogRoutes)
app.use("/order", orderRoutes)
app.use("/favorite", favoriteRoutes)
app.use("/basket", basketRoutes)
app.use("/public",
    express.static(path.join(__dirname, "../public"))
)




server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

async function connecToDb() {
    await mongoose.connect(
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.rwfje.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
}

connecToDb()
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log(err));