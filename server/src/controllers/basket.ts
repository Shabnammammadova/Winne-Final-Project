import { Request, Response } from "express";
import Basket from "../mongoose/schemas/basket";
import User from "../mongoose/schemas/user";

const getAll = async (req: Request, res: Response) => {
    try {
        const userId = req.user?._id;
        const favorites = await Basket.find({ userId: userId }).populate("productId", "name price discount images");

        res.json({
            message: "Basket retrieved successfully",
            items: favorites
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

        const existingBasket = await Basket.findOne({ userId, productId });

        if (existingBasket) {
            existingBasket.quantity += 1;
            await existingBasket.save();
            res.status(200).json({
                message: "Product quantity updated in basket",
                item: existingBasket
            });
            return
        }

        const basket = new Basket({ userId, productId });
        await basket.save();

        await User.findByIdAndUpdate(userId, { $push: { basket: basket._id } });

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

const update = async (req: Request, res: Response) => {
    try {
        const { productId, quantity } = req.body;
        const userId = req.user?._id;

        const basket = await Basket.findOne({ userId, productId });
        if (!basket) {
            res.status(404).json({ message: "Product not found in basket" });
            return;
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

        await Basket.findOneAndDelete({ userId, _id: productId });

        res.json({ message: "Product removed from basket" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while removing from  basket" });
    }
};

const removeAll = async (req: Request, res: Response) => {
    try {
        const userId = req.user?._id;
        if (!userId) {
            res.status(401).json({ message: "Unauthorized" });
            return
        }

        await Basket.deleteMany({ userId })

        res.json({ message: "All products removed from basket" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while clearing the basket" });
    }
};



export default {
    getAll,
    add,
    update,
    remove,
    removeAll,
    quantity
}