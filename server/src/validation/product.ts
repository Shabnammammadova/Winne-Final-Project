import { Schema } from "express-validator";

export const getAllProductSchema: Schema = {
    take: {
        in: ["query"],
        isNumeric: true,
        optional: true
    },
    skip: {
        in: ["query"],
        isNumeric: true,
        optional: true
    },
    search: {
        in: ["query"],
        isString: true,
        optional: true
    },
    category: {
        in: ["query"],
        optional: true
    },
    price: {
        in: ["query"],
        isNumeric: true,
        optional: true
    },
    size: {
        in: ["query"],
        isString: true,
        optional: true
    },
}



export const createProductSchema: Schema = {
    name: {
        in: ["body"],
        isString: true,
        notEmpty: true
    },
    price: {
        in: ["body"],
        isNumeric: true,
        notEmpty: true
    },
    categoryId: {
        in: ["body"],
        isString: true,
        notEmpty: true
    },
    size: {
        in: ["query"],
        isString: true,
        optional: true
    },
    currency: {
        in: ["body"],
        isString: true,
        optional: true,
        notEmpty: true
    },
    discount: {
        in: ["body"],
        isNumeric: true,
        optional: true,
    },
    files: {
        custom: {
            options: (_, { req }) => {
                if (!req.files || req.files.length === 0) {
                    throw new Error("Image not uploaded!!");
                }
                return true;
            },
        },
    }
}

export const editProductSchema: Schema = {
    name: {
        in: ["body"],
        isString: true,
        notEmpty: true
    },
    price: {
        in: ["body"],
        isNumeric: true,
        notEmpty: true
    },
    categoryId: {
        in: ["body"],
        isString: true,
        notEmpty: true
    },
    currency: {
        in: ["body"],
        isString: true,
        optional: true,
        notEmpty: true
    },
    discount: {
        in: ["body"],
        isNumeric: true,
        optional: true,
    },
}