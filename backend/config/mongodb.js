import mongoose from "mongoose";

const connectDB = async () => {
    
    mongoose.connection.on('connected',()=>{
        console.log('DB connected');
    })

     try {
        await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
    } catch (err) {
        console.log("Failed to connect to DB:", err.message);
        process.exit(1); // 👈 crashes loudly instead of silently hanging
    }
}

export default connectDB;   