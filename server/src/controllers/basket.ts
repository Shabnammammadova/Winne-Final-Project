import { Request, Response } from "express";
import Basket from "../mongoose/schemas/basket";


const getAll = async (req: Request, res: Response) => {
    try {
        const userId = req.user?._id;
        const basket = await Basket.find({ user: userId }).populate("product", "name price images");

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
        const { productId } = req.body;
        const userId = req.user?._id;

        const exists = await Basket.findOne({ user: userId, product: productId });
        if (exists) {
            return res.status(400).json({ message: "Product is already in basket" });
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
        const { productId, quantity } = req.body;
        const userId = req.user?._id;

        const basket = await Basket.findOne({ user: userId, product: productId });
        if (!basket) {
            return res.status(404).json({ message: "Product not found in basket" });
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