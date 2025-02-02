import { Schema } from "express-validator";

export const getAllBlogSchema: Schema = {
    name: {
        in: ["query"],
        isString: true,
        optional: true
    },
    description: {
        in: ["query"],
        isString: true,
        optional: true
    },
}


export const createBlogSchema: Schema = {
    name: {
        in: ["body"],
        isString: true,
        notEmpty: true
    },
    description: {
        in: ["body"],
        isString: true,
        notEmpty: true
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

export const editBlogSchema: Schema = {
    name: {
        in: ["body"],
        isString: true,
        notEmpty: true
    },
    dewscription: {
        in: ["body"],
        isString: true,
        notEmpty: true
    },

}