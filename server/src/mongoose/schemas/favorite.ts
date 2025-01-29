import mongoose, { Types } from "mongoose";
const { Schema } = mongoose;

const favoriteSchema = new Schema({
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
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

favoriteSchema.index({ userId: 1, productId: 1 }, { unique: true });

favoriteSchema.set("toJSON", {
    virtuals: true,
    transform: (doc, ret) => {
        delete ret.__v;
    },
});

export default mongoose.model("Favorite", favoriteSchema);
