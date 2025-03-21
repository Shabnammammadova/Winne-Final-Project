import { Request, Response } from "express";
import order from "../mongoose/schemas/order";
import Product from "../mongoose/schemas/product";
import Order from "../mongoose/schemas/order"
import { calculateDateDifference } from "../utils/date";
import { Product as TProduct } from "../types/schema";




const getAll = async (req: Request, res: Response) => {
    try {
        const user = req.user;
        const filter: Record<string, any> = {};
        if (user?.role !== "admin") {
            filter.user = user?._id.toString() ?? "";
        }

        const orders = await order.find(filter)
            .populate("product", "name images price currency");
        console.log("orders", orders);


        orders.forEach((order) => {
            const product = order.product as TProduct;
            if (product && product.images) {
                product.images = product.images.map((image) => {
                    if (image.includes(process.env.BASE_URL!)) return image;
                    return `${process.env.BASE_URL}/public/product/${image}`;
                });
            }
        });

        res.json({
            message: "Orders retrieved successfully",
            items: orders
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
};




const create = async (req: Request, res: Response) => {
    try {
        const { productId, totalPrice, startDate, endDate } = req.matchedData;

        const product = await Product.findById(productId);
        if (!product) {
            res.status(404).json({ message: "Product not found" });
            return
        }


        const exitOrder = await Order.findOne({
            product: productId,
            startDate: { $lte: endDate },
            endDate: { $gte: startDate },
            status: { $in: ["pending", "approved"] },
        });

        if (exitOrder) {
            res.status(400).json({ message: "This product is already booked for these dates" });
            return
        }


        const dateCount = calculateDateDifference(startDate, endDate);


        const total = totalPrice || (dateCount * product.price);


        const order = new Order({
            user: req.user?._id,
            product: productId,
            totalPrice: total,
            startDate,
            endDate,
            total,
        });

        await order.save();

        res.status(201).json({
            message: "Order created successfully",
            item: order,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "An error occurred while creating the order",
        });
    }
};


const cancel = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const order = await Order.findOne({
            _id: id,
            user: req.user?._id,
            status: "pending"
        })
        if (!order) {
            res.status(404).json({ message: "Order not found" })
            return
        }
        order.status = "cancelled"

        await order.save()
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}


const changeStatus = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { status } = req.matchedData;
        const order = await Order.findById(id);

        if (!order) {
            res.status(404).json({
                message: "Order not found"
            });
            return
        }


        if (order.status === "cancelled" || order.status === "rejected") {
            res.status(400).json({
                message: "Order is already cancelled or rejected"
            })
            return
        }


        order.status = status;
        await order.save();

        res.json({
            message: "Order status updated succesfully",
            item: order
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Internal Server Error"
        })

    }
}

export default {
    getAll,
    create,
    cancel,
    changeStatus
}