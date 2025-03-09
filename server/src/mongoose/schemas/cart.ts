import mongoose, { Schema } from "mongoose";


const cartItemSchema = new Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
    },
});

const CartItem = mongoose.model("CartItem", cartItemSchema);

export { CartItem };