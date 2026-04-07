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
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://forever-frontend-blond-sigma.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "token"],
  credentials: true
}));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://forever-frontend-blond-sigma.vercel.app");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, token");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

//api endpoints
app.use('/api/user',userRouter);
app.use('/api/product',productRouter);
app.use('/api/cart',cartRouter);
app.use('/api/order',orderRouter);

app.get('/',(req,res)=>{
    res.send('Api Working')
})

export default app;