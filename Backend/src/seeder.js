import mongoose from "mongoose";
import dotenv from "dotenv";
import Course from "./models/Course.js"; // Đảm bảo đường dẫn này đúng với file Model của bạn

dotenv.config();

const courses = [
  {
    title: "Lập trình Web Fullstack với MERN",
    instructor: "ThS. Nguyễn Văn A",
    price: 890000,
    image: "https://img.youtube.com/vi/7CqJlxBYj-M/maxresdefault.jpg",
    status: "active"
  },
  {
    title: "Cấu trúc dữ liệu và Giải thuật (UIT)",
    instructor: "TS. Trần Thị B",
    price: 550000,
    image: "https://img.youtube.com/vi/8hly31xKli0/maxresdefault.jpg",
    status: "active"
  },
  {
    title: "Thiết kế giao diện UI/UX với Figma",
    instructor: "Designer Lê C",
    price: 1200000,
    image: "https://img.youtube.com/vi/ft30zcMlqao/maxresdefault.jpg",
    status: "active"
  },
  {
    title: "Nhập môn Trí tuệ nhân tạo",
    instructor: "GS. Phạm D",
    price: 0,
    image: "https://img.youtube.com/vi/JMUxmLtuSkg/maxresdefault.jpg",
    status: "active"
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