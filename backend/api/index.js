// 
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from '../config/mongodb.js';
import connectCloudinary from '../config/cloudinary.js';
import userRouter from '../routes/userRoutes.js';
import productRouter from '../routes/productRoutes.js';
import cartRouter from '../routes/cartRoutes.js';
import orderRouter from '../routes/orderRoutes.js';


//App config
const app = express();
const port = process.env.PORT || 4000;

//mongodb connection
connectDB();

//cloudinary connection
connectCloudinary();

//middlewares
app.use(express.json());
import cors from "cors";

const allowedOrigins = [
  "http://localhost:5173",
  "https://forever-frontend-blond-sigma.vercel.app",
  "https://forever-admin-nine-roan.vercel.app"
];

app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin (like Postman)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "token"],
  credentials: true
}));


//api endpoints
app.use('/api/user',userRouter);
app.use('/api/product',productRouter);
app.use('/api/cart',cartRouter);
app.use('/api/order',orderRouter);

app.get('/',(req,res)=>{
    res.send('Api Working')
})

export default app;