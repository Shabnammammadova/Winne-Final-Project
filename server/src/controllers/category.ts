import { Request, Response } from "express";
import Category from "../mongoose/schemas/category";

const getAll = async (_req: Request, res: Response) => {
    try {
        const data = await Category.find();
        const items = data.map((item) => ({
            _id: item._id,
            name: item.name,
            count: Array.isArray(item.products) ? item.products.length : 0,
            createdAt: item.createdAt
        }));

        res.json({
            message: "Category retrieved successfully",
            items,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "An error occurred while retrieving categories"
        });
    }
};

const create = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({
                message: "Category name is required"
            });
        }

        const category = new Category({ name });
        await category.save();

        res.status(201).json({
            message: "Category created successfully",
            item: category
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "An error occurred while creating the category"
        });
    }
};

const update = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;
        const { id } = req.params;
        const category = await Category.findById(id);

        if (!category) {
            return res.status(404).json({
                message: "Category not found"
            });
        }

        category.name = name;
        await category.save();

        res.json({
            message: "Category updated successfully",
            item: category
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "An error occurred while updating the category"
        });
    }
};

const remove = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const category = await Category.findById(id);

        if (!category) {
            return res.status(404).json({
                message: "Category not found"
            });
        }

        await category.deleteOne();

        res.json({
            message: "Category deleted successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "An error occurred while deleting the category"
        });
    }
};

export default {
    getAll,
    create,
    update,
    remove
};
