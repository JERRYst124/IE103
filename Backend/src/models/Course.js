import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    duration: {
      type: String,
      required: true,
      default: "Đang cập nhật",
    },
    image: { 
      type: String, 
      default: "https://via.placeholder.com/300x200"
    },
    description: {
      type: String,
      trim: true,
    },

    price: {
      type: Number,
      default: 0,
    }
  },
  {
    timestamps: true, 
  }
);

const Course = mongoose.model("Course", courseSchema);
export default Course;