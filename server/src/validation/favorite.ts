import { Schema } from "express-validator";



export const createFavoriteSchema: Schema = {
    productId: {
        in: ["body"],
        isString: true,
        notEmpty: true
    },
}
