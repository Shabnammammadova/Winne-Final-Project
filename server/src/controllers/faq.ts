import { Request, Response } from "express";
import FAQ from "../mongoose/schemas/faq";

const getAll = async (_req: Request, res: Response) => {
    const data = await FAQ.find();
    const items = data.map((item) => ({
        _id: item._id,
        question: item.question,
        answer: item.answer,
        createdAt: item.createdAt
    }));

    res.json({
        message: "FAQs retrieved successfully",
        items,
    });
};

const getById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const faq = await FAQ.findById(id)

        if (!faq) {
            res.status(404).json({
                message: "Not Found"
            });
            return
        }


        res.json({
            message: "success",
            item: faq
        });

    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: "Internal Server Error"
        })
    }
}

const create = async (req: Request, res: Response) => {
    const { question, answer } = req.body;

    const faq = new FAQ({ question, answer });

    await faq.save();
    res.status(201).json({
        message: "FAQ created successfully",
        item: faq
    });
};

const update = async (req: Request, res: Response) => {
    const { question, answer } = req.body;
    const { id } = req.params;
    const faq = await FAQ.findById(id);

    if (!faq) {
        res.status(404).json({
            message: "FAQ not found"
        });
        return;
    }

    if (question) faq.question = question;
    if (answer) faq.answer = answer;
    await faq.save();

    res.json({
        message: "FAQ updated successfully",
        item: faq
    });
};

const remove = async (req: Request, res: Response) => {
    const { id } = req.params;
    const faq = await FAQ.findById(id);

    if (!faq) {
        res.status(404).json({
            message: "FAQ not found"
        });
        return;
    }

    await faq.deleteOne();

    res.json({
        message: "FAQ deleted successfully"
    });
};

export default {
    getAll,
    create,
    getById,
    update,
    remove
};
