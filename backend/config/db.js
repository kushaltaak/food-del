import mongoose from "mongoose";

 export const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://kushaltaak44_db_user:CpCFuBNiSTb1j1JR@cluster0.koff0qx.mongodb.net/FOOD-DEL").then(()=>console.log("DB connected"))
}
