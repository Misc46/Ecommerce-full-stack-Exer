import express from "express";
import {
  placeOrder,
  allOrder,
  userOrder,
  updateStatus,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

// ADMIN
orderRouter.post("/list", adminAuth, allOrder);
orderRouter.post("/status", adminAuth, updateStatus);

// USER
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/userorders", authUser, userOrder);

export default orderRouter;
