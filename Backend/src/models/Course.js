import mongoose, { Schema } from "mongoose"
const courseSchema = new mongoose. Schema(
{
    title: {
    type: String,
    required: true,
    trim: true,
    },
    status: {
        type: String,
        enum: ["active", "complete"],
        default: "active",
    },
    completedAt: {
        type: Date,
        default: null,
    },

    },
    {
        timestamps: true, // createdAt và updatedAt tự động thêm vào
    }
);
const Course = mongoose.model("Course",courseSchema);
export default Course;