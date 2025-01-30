import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDb();
connectCloudinary();

//middleware
app.use(express.json());

// Configure CORS
const corsOptions = {
  origin: 'https://exertubid-frontend.vercel.app', // Replace with your frontend domain
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
//api endpoints

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use('/api/order', orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});
app.listen(port, () => console.log("server started on PORT : " + port));
