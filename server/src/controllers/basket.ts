import { Request, Response } from "express";
import Basket from "../mongoose/schemas/basket";
import { Product as TProduct } from "../types/schema";


const getAll = async (req: Request, res: Response) => {
    try {
        const userId = req.user?._id;
        if (!userId) {
            res.status(400).json({ message: "User not found" });
            return
        }

        const basket = await Basket.find({ user: userId }).populate("product", "name price images");

        if (!basket.length) {
            res.status(404).json({ message: "No items in basket" });
            return
        }

        res.json({
            message: "Basket retrieved successfully",
            items: basket
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while retrieving basket" });
    }
};


const add = async (req: Request, res: Response) => {
    try {
        const { productId } = req.matchedData;
        const userId = req.user?._id;

        if (!productId || !userId) {
            res.status(400).json({ message: "Product ID and User ID are required" });
            return
        }

        const exists = await Basket.findOne({ user: userId, product: productId });
        if (exists) {
            res.status(400).json({ message: "Product is already in basket" });
            return
        }

        const basket = new Basket({ user: userId, product: productId });
        await basket.save();

        res.status(201).json({
            message: "Product added to basket",
            item: basket
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while adding to basket" });
    }
};


const quantity = async (req: Request, res: Response) => {
    try {
        const { productId, quantity } = req.matchedData;
        const userId = req.user?._id;

        const basket = await Basket.findOne({ user: userId, product: productId });
        if (!basket) {
            res.status(404).json({ message: "Product not found in basket" });
            return
        }

        basket.quantity = quantity;
        await basket.save();

        res.json({
            message: "Product quantity updated in basket",
            item: basket
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while updating basket quantity" });
    }
};

const remove = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const userId = req.user?._id;

        await Basket.findOneAndDelete({ user: userId, product: productId });

        res.json({ message: "Product removed from basket" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while removing from  basket" });
    }
};


export default {
    getAll,
    add,
    remove,
    quantity
}