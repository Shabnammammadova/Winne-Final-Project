import { Request, Response } from "express";
import Product from "../mongoose/schemas/product";
import review from "../mongoose/schemas/review";
import Category from "../mongoose/schemas/category";
import User from "../mongoose/schemas/user";


const getAll = async (req: Request, res: Response) => {
    try {
        const { take = 10, skip = 0, search, category, price, size } = req.matchedData;

        const filter: Record<string, any> = {
            $and: [],
            $or: []
        };

        if (search) {
            filter.$or.push(
                { name: { $regex: new RegExp(search, "i") } },
            );
        }

        if (category) {
            const categoryList = typeof category === "string" ? [category] : category;
            filter.category = { $in: categoryList };
        }

        if (price) {
            filter.$and.push({ price: { $gte: price } });
        }
        if (size) {
            filter.$and.push({ size: { $gte: size } })
        }
        if (filter.$and.length === 0) {
            delete filter.$and;
        }


        const items = await Product.find(filter)
            .skip(+skip)
            .limit(+take)
            .populate(["category", "price", "size"]);


        const total = await Product.countDocuments(filter);

        items.forEach((item) => {
            item.images = item.images.map((image) => `${process.env.BASE_URL}/public/product/${image}`);
        });
        res.json({
            message: "success",
            items,
            total,
            take: +take,
            skip: +skip
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: "Internal server Error"
        });
    }
};


const getById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const product = await Product.findById(id).populate([
            "category",
            "size",
            "reviews"
        ]);

        const reviews = await review.find({
            product: id,
            status: "approved"
        }).populate("author", "name surname")


        if (!product) {
            res.status(404).json({
                message: "Not Found"
            });
            return
        }

        product.images = product.images.map((image) => `${process.env.BASE_URL}/public/product/${image}`);

        res.json({
            message: "success",
            item: {
                ...product.toObject(),
                reviews
            }
        });

    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: "Internal Server Error"
        })
    }
}

const create = async (req: Request, res: Response) => {
    try {
        const { name, price, categoryId, currency, discount } = req.matchedData;


        const category = await Category.findById(categoryId);

        if (!category) {
            res.status(404).json({
                message: "Category Not Found"
            });
            return
        }

        const images = (req.files as any)?.map((file: any) => file.filename)
        const product = new Product({
            name,
            category,
            price,
            currency,
            discount,
            images,
        })
        await product.save();


        category.products.push(product._id)
        await category.save()


        if (Array.isArray(category.products)) {
            category.products.push(product._id);
            await category.save();
        } else {
            res.status(500).json({
                message: "Category product is not an array",
            });
            return;
        }


        res.status(201).json({
            message: "Product created successfully",
            item: product,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal server error",
        });
    }
};

const update = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = { ...req.matchedData };

        const { categoryId } = data;
        const category = await Category.findById(categoryId);

        if (!category) {
            res.status(404).json({ message: "Category Not Found" });
            return
        }

        if (req.files && (req.files as any).length > 0) {
            data.images = (req.files as any).map((file: any) => file.filename);
        }

        const product = await Product.findById(id);
        if (!product) {
            res.status(404).json({ message: "Not Found" });
            return
        }

        const oldCategoryId = product.category;
        await Category.findByIdAndUpdate(oldCategoryId, {
            $pull: { products: id }
        });

        category.products.push(product._id);
        await category.save();
        if (data.name) product.name = data.name;
        if (data.category) product.category = data.category;
        if (data.price) product.price = data.price;
        if (data.discount) product.discount = data.discount;
        if (data.images) product.images = data.images;

        await product.save();

        res.json({ message: "success", item: product });
    } catch (error) {
        console.error("Update error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


const getAddFavorite = async (req: Request, res: Response) => {
    const { _id, productId } = req.body;

    try {
        const user = await User.findById(_id);
        if (!user) {
            res.status(404).json({
                message: "User not found",
            });
            return;
        }
        const alreadyAdded = user.favorites.includes(productId);
        if (alreadyAdded) {
            res.status(400).json({
                message: "Product is already in favorite",
            });
            return;
        }
        user.favorites.push(productId);
        await user.save();

        res.json({
            message: "Product added to favorite",
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error adding product to favorites",
        });
    }
};


const remove = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            res.status(404).json({
                message: "Product not found",
            })
            return
        }
        res.json({
            message: "success",
            item: product
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal server error",
        });
    }
};

export default {
    getAll,
    getById,
    create,
    update,
    getAddFavorite,
    remove,
};