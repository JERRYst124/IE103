
import mongoose from "mongoose"

export const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING); 
        console.log("Liên kết Database thành công!");
    }catch (error){
        console.log("Lỗi khi kết nối Database!");
        process.exit(1);
    }
};