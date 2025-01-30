import { Schema } from "express-validator";


export const createBasketSchema: Schema = {
    userId: {
        in: ["body"],
        isMongoId: true,
        notEmpty: true
    },
    productId: {
        in: ["body"],
        isMongoId: true,
        notEmpty: true
    },
}
