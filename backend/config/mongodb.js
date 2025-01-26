import mongoose from "mongoose";

const connectDb = async () => {

    mongoose.connection.on('connected',() => {
        console.log("Connected")
    })
    
    await mongoose.connect(`${process.env.MONGODB_URL}/e-commerce`)

}

export default connectDb