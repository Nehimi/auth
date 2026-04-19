import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const uri = process.env.MONGODB_URI;;
export const connectDB = async()=>{
    try{
        console.log("Connecting to MongoDB...");
    await mongoose.connect(uri);
        console.log("MongoDB connected successfully");
    }
    catch(err){
        console.log("Error connecting to MongoDB",err);
        process.exit(1); // Exit the process with a non-zero status code to indicate an error
    }
}

