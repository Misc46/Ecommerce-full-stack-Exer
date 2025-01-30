import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// COD

const placeOrder = async (req,res) => {
    try {
        
        const {userId, items, amount, address} = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:'cod',
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})
        
        res.json({success:true, message:"Order added"})

    } catch (error) {
        console.log(error)
        res.json({success: false, message:error.messsage})
    }
}

// Admin

const allOrder = async (req,res) => {
    try {
        const orders = await orderModel.find({})
        res.json({success:true,orders})
    } catch (error) {
        console.log(error)
        res.json({success: false, message:error.messsage})
    }
}

// User
const userOrder = async (req,res) => {
    try {
        const {userId} = req.body
        const orders = await orderModel.find({userId})
        res.json({success:true,orders})
    } catch (error) {
        console.log(error)
        res.json({success: false, message:error.messsage})
    }
}

// update pesanan ADMIN

const updateStatus = async (req,res) => {
    try {
        const {orderId, status} = req.body
        await orderModel.findByIdAndUpdate(orderId, {status})
        res.json({success:true, message:'Status Updated'})


    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
        
    }
}

export {placeOrder, allOrder, userOrder, updateStatus}