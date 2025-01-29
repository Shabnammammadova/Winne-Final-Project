import mongoose, { Types } from "mongoose";
const { Schema } = mongoose;

const basketSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        ref: "User",
        required: true,
    },
    productId: {
        type: Types.ObjectId,
        ref: "Product",
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
        default: 1,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

basketSchema.index({ userId: 1, productId: 1 }, { unique: true });

basketSchema.set("toJSON", {
    virtuals: true,
    transform: (doc, ret) => {
        delete ret.__v;
    },
});

export default mongoose.model("Basket", basketSchema);