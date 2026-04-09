// Bước 1: Khai báo các thư viện cần thiết
import taskRoute from "./routes/tasksRouter.js"

import express from "express"


// Bước 2: Khởi tạo ứng dụng Express (Đây chính là biến 'app' mà máy báo thiếu)
const app = express();
app.use("/api/tasks/", taskRoute);


// Bước 6: Khởi động server
app.listen(3000, () => {
  console.log('Server đang chạy ngon lành ở port 3000 nhé!');
});