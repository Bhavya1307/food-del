import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://bhavya:bhavya@cluster0.p3kmrxy.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}