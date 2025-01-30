import mongoose, { Types } from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    size: {
        type: String,
        required: true,
    },
    category: {
        type: Types.ObjectId,
        ref: "Category",
        required: true
    },
    currency: {
        type: String,
        default: "$"
    },
    discount: {
        type: Number,
        default: 0
    },
    images: {
        type: [String],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    reviews: {
        type: [Types.ObjectId],
        ref: "Review",
        default: []
    }
});


productSchema.set("toJSON", {
    virtuals: true,
    transform: (doc, ret) => {
        delete ret.__v;
    }
})

export default mongoose.model("Product", productSchema);