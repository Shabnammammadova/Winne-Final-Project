import { Request, Response } from "express";
import Favorite from "../mongoose/schemas/favorite";


const getAll = async (req: Request, res: Response) => {
    try {
        const userId = req.user?._id;
        const favorites = await Favorite.find({ user: userId }).populate("product", "name price images");

        res.json({
            message: "Favorite retrieved successfully",
            items: favorites
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while retrieving favorites" });
    }
};


const add = async (req: Request, res: Response) => {
    try {
        const { productId } = req.matchedData;
        const userId = req.user?._id;

        const exists = await Favorite.findOne({ user: userId, product: productId });
        if (exists) {
            res.status(400).json({ message: "Product is already in favorites" });
            return
        }

        const favorite = new Favorite({ user: userId, product: productId });
        await favorite.save();

        res.status(201).json({
            message: "Product added to favorites",
            item: favorite
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while adding to favorites" });
    }
};


const remove = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const userId = req.user?._id;

        await Favorite.findOneAndDelete({ user: userId, product: productId });

        res.json({ message: "Product removed from favorites" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while removing from favorites" });
    }
};


export default {
    getAll,
    add,
    remove
}