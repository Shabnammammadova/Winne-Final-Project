import mongoose, { Types } from "mongoose";
const { Schema } = mongoose;

const blogSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});


blogSchema.set("toJSON", {
    virtuals: true,
    transform: (doc, ret) => {
        delete ret.__v;
    }
})

export default mongoose.model("Blog", blogSchema);