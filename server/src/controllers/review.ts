import { Request, Response } from "express"
import Review from "../mongoose/schemas/review"
import Order from "../mongoose/schemas/order";
import Product from "../mongoose/schemas/product";


const getAll = async (req: Request, res: Response) => {
    try {
        const reviews = await Review.find().populate("author").populate("product");
        res.status(200).json({
            message: "Reviews fetched successfully",
            items: reviews
        })
    } catch (err) {
        res.status(500).json({ message: "Internal server error" })
    }
};

const create = async (req: Request, res: Response) => {
    try {
        const user = req.user;
        const { reservationId, productId, content, rating } = req.matchedData;
        const reservation = await Order.findById(reservationId);

        if (!reservation) {
            res.status(404).json({ message: "Reservation not found" })
            return
        }
        if (reservation.hasReview) {
            res.status(400).json({ message: "Reservation already has a review" })
            return
        }

        const product = await Product.findById(productId)

        if (!product) {
            res.status(404).json({
                message: "Product not found"
            })
            return
        }

        const review = await Review.create({
            author: user!._id,
            product: productId,
            content,
            rating
        });

        reservation.hasReview = true;
        await reservation.save();

        product.reviews.push(review._id)
        await product.save()
        res.status(201).json({
            message: "Review created successfully",
            review
        })
    } catch (err) {
        res.status(500).json({ message: "Internal server error" })
    }
};

const changeStatus = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { status } = req.matchedData;

        const review = await Review.findById(id);
        if (!review) {
            res.status(404).json({ message: "Review not found" })
            return;
        }
        review.status = status;
        await review.save()


        res.status(200).json({
            message: "Review status updated successfully",
            review
        })
    } catch (err) {
        res.status(500).json({ message: "Internal server error" })
    }
}


const getByProductId = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const reviews = await Review.find({
            product: productId, status: "approved"
        }).populate("author")

        res.status(200).json({
            message: "Review fetched successfully",
            items: reviews
        })
    } catch (err) {
        res.status(500).json({
            message: "Internal server error"
        })
    }
}


export default {
    getAll, getByProductId, create, changeStatus
}