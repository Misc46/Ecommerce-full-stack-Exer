//route login
//demi tuhan gw udah mau menyerah

import userModel from "../models/userModel.js";
import validator from "validator";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//gw aja gak religius :skull:
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User tidak ditemukan" });
    }

    const isMatch = await bycrypt.compare(password, user.password);

    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Cek usernya udah ada apa blom
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    // validate email & pass
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Alamat email tidak valid" });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    //Bcyrpt hasher
    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    const token = createToken(user._id);

    res.json({ success: true, token }); //BISA GILA GWEH
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//Admin
//Apa gw jual aja website ini ya
const adminLogin = async (req, res) => {};

export { loginUser, registerUser, adminLogin };
