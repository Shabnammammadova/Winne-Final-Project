import { Request, Response } from "express";
import Category from "../mongoose/schemas/category"


const getAll = async (_req: Request, res: Response) => {
    const data = await Category.find();
    const items = data.map((item) => ({
        _id: item._id,
        name: item.name,
        count: Array.isArray(item.products) ? item.products.length : 0,
        createdAt: item.createdAt
    }))

    res.json({
        message: "Category  retrieved succesfully",
        items,
    })
}

const getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const category = await Category.findById(id);

    if (!category) {
        res.status(404).json({
            message: "Category not found"
        });
        return
    }
    res.json({
        message: "Category retrieved successfully",
        item: {
            _id: category._id,
            name: category.name,
            count: Array.isArray(category.products) ? category.products.length : 0,
            createdAt: category.createdAt
        }
    });
};

const create = async (req: Request, res: Response) => {
    const { name } = req.matchedData;

    const category = new Category({ name });

    await category.save();
    res.status(201).json({
        message: " Category created succesfully",
        item: category
    })
}


const update = async (req: Request, res: Response) => {
    const { name } = req.matchedData;
    const { id } = req.params
    const category = await Category.findById(id);

    if (!category) {
        res.status(404).json({
            message: " Category not found"
        })
        return
    }
    category.name = name;
    await category.save();

    res.json({
        message: " Category updated succesfully",
        item: category
    })
}

const remove = async (req: Request, res: Response) => {
    const { id } = req.params;
    const category = await Category.findById(id);

    if (!category) {
        res.status(404).json({
            message: " Category not found"
        })
        return
    }

    await category.deleteOne();

    res.json({
        message: " Category deleted succesfully"
    })
}

export default {
    getAll,
    create,
    getById,
    update,
    remove
}