import { Request, Response } from "express";
import Blog from "../mongoose/schemas/blog";


const getAll = async (req: Request, res: Response) => {
    try {
        const { take = 10, skip = 0, search, name, description } = req.matchedData;

        const filter: Record<string, any> = {
            $and: [],
            $or: []
        };

        if (search) {
            filter.$or.push(
                { name: { $regex: new RegExp(search, "i") } },
            );
        }
        if (name) {
            filter.$and.push({ price: { $gte: name } });
        }
        if (description) {
            filter.$and.push({ size: { $gte: description } })
        }
        if (filter.$and.length === 0) {
            delete filter.$and;
        }


        const items = await Blog.find(filter)
            .skip(+skip)
            .limit(+take)
            .populate(["name", "description"]);



        items.forEach((item) => {
            item.images = item.images.map((image) => `${process.env.BASE_URL}/public/product/${image}`);
        });
        res.json({
            message: "success",
            items,
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

        const blog = await Blog.findById(id).populate([
            "name"
        ]);


        if (!blog) {
            res.status(404).json({
                message: "Not Found"
            });
            return
        }

        blog.images = blog.images.map((image) => `${process.env.BASE_URL}/public/product/${image}`);

        res.json({
            message: "success",
            item: {
                ...blog.toObject(),
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
        const { name, description } = req.matchedData;



        const images = (req.files as any)?.map((file: any) => file.filename)
        const blog = new Blog({
            name,
            description,
            images,
        })
        await blog.save();

        res.status(201).json({
            message: "Blog created successfully",
            item: blog,
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
        const data = { ...req.body };
        if (!id) {
            res.status(400).json({ message: "Blog ID is required" });
            return
        }

        const blog = await Blog.findById(id);
        if (!blog) {
            res.status(404).json({ message: "Not Found" });
            return
        }

        if (!data.name || !data.description) {
            res.status(400).json({ message: "Name and description are required" });
            return
        }

        blog.name = data.name;
        blog.description = data.description;

        if (req.files && (req.files as any).length > 0) {
            blog.images = (req.files as any).map((file: any) => file.filename);
        }

        await blog.save();

        res.json({
            message: "success",
            item: blog,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};


const remove = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findByIdAndDelete(id);

        if (!blog) {
            res.status(404).json({
                message: "Product not found",
            })
            return
        }
        res.json({
            message: "success",
            item: blog
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
    update,
    create,
    remove
}