// Bước 1: Khai báo các thư viện cần thiết
import { connectDB } from "./config/db.js";
import courseRoute from "./routes/coursesRouter.js"
import dotenv from "dotenv"
import express from "express"

dotenv.config();
connectDB();

const PORT = process.env.PORT || 3000

// Bước 2: Khởi tạo ứng dụng Express (Đây chính là biến 'app' mà máy báo thiếu)
const app = express();
app.use(express.json());
app.use("/api/courses/", courseRoute);


// Bước 6: Khởi động server
app.listen(PORT, () => {
  console.log(`Server đang chạy ngon lành ở port ${PORT} nhé!`);
});