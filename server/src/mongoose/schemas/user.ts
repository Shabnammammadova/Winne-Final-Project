import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    googleID: {
        type: String,
    },
    githubID: {
        type: String,
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
    resetPasswordToken: {
        type: String,
        default: null,
    },
    resetPasswordTokenExpires: {
        type: Date,
        default: null,
    },
    favorites: [
        {
            type: Schema.Types.ObjectId,
            ref: "Favorite",
        }
    ],
    basket: [
        {
            productId: {
                type: Schema.Types.ObjectId,
                ref: "Product",
                required: true,
            },
            quantity: {
                type: Number,
                default: 1,
                min: 1,
            }
        }
    ],
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order",
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

userSchema.set("toJSON", {
    virtuals: true,
    transform: (doc, ret) => {
        delete ret.__v;
    },
});

export default mongoose.model("User", userSchema);