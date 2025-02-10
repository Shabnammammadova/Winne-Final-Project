import { Request, Response } from "express";
import Favorite from "../mongoose/schemas/favorite";
import User from "../mongoose/schemas/user";


const getAll = async (req: Request, res: Response) => {
    try {
        const userId = req.user?._id;
        const favorites = await Favorite.find({ userId: userId }).populate("productId", "name price discount images");

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
        const { productId } = req.body;
        const userId = req.user?._id;

        const exists = await Favorite.findOne({ userId: userId, productId: productId });
        if (exists) {
            res.status(400).json({ message: "Product is already in favorites" });
            return
        }

        const favorite = new Favorite({ userId: userId, productId: productId });
        await favorite.save();


        await User.findByIdAndUpdate(userId, { $push: { favorites: favorite._id } });


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

        await Favorite.findOneAndDelete({ userId, _id: productId });

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