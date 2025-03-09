import mongoose, { Types } from "mongoose";
const { Schema } = mongoose;

const orderSchema = new Schema({
    product: {
        type: Types.ObjectId,
        ref: "Product",
        required: true,
    },
    customer: {
        type: Types.ObjectId,
        ref: "User",
    },
    payment: {
        type: String,
        enum: ["pending", "completed", "failed"],
        default: "pending",
    },
    user: {
        type: Types.ObjectId,
        ref: "User",
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "approved", "rejected", "cancelled"],
        default: "pending",
    },
    hasReview: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});

orderSchema.set("toJSON", {
    virtuals: true,
    transform: (doc, ret) => {
        delete ret.__v;
    },
});

export default mongoose.model("Order", orderSchema);
