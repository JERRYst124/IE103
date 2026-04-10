import mongoose from "mongoose";
import dotenv from "dotenv";
import Course from "./models/Course.js"; // Đảm bảo đường dẫn này đúng với file Model của bạn

dotenv.config();

const courses = [
  {
    title: "Lập trình Web cho người mới bắt đầu",
    duration: "15 giờ",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500",
    price: 500000
  },
  {
    title: "Khóa học ReactJS nâng cao",
    duration: "20 giờ",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500",
    price: 800000
  },
  {
    title: "Cấu trúc dữ liệu và Giải thuật",
    duration: "30 giờ",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500",
    price: 0
  }
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING);
    console.log("🚀 Đang kết nối để bơm dữ liệu...");

    // Xóa dữ liệu cũ để tránh trùng lặp
    await Course.deleteMany();
    console.log("🗑️ Đã dọn dẹp sạch sẽ dữ liệu cũ.");

    // Chèn dữ liệu mới
    await Course.insertMany(courses);
    console.log("✅ Đã bơm dữ liệu mẫu thành công!");

    process.exit(); // Thoát sau khi xong
  } catch (error) {
    console.error("❌ Lỗi Seeder:", error);
    process.exit(1);
  }
};

seedData();