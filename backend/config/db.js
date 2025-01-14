import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://1974ankita:7iHn5AoGkC9e3A6o@cluster0.3xcpu.mongodb.net/foodCenter').then(()=>console.log("DB connected"))
}