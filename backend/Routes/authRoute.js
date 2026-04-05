const express = require("express");
const User = require("../models/user");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Register
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // console.log("hello world :", req.body);

    // validation
    if (!username || !email || !password) {
      return res.status(402).json({
        success: false,
        message: "all fields are required",
      });
    }

    const registerUser = await User.findOne({ email });
    console.log("hjkd", registerUser);

    if (registerUser) {
      return res.status(409).json({
        success: false,
        message: "User Already Exist",
      });
    }

    // hashing password
    const hashPassword = await bcrypt.hash(password, 10);

    const newRegister = await User.create({
      username,
      email,
      password: hashPassword,
    });

    res.status(201).json({
      success: true,
      message: "Registered Successfully",
      newRegister,
    });
  } catch (err) {
    console.log("register route", err);
    res.status(500).json({
      success: false,
      message: "Register failed",
    });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const registeredUser = await User.findOne({ email }).select("+password");
    if (!registeredUser) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
    console.log("password", registeredUser.password);

    const comparePassword = await bcrypt.compare(password, registeredUser.password);

    if (!comparePassword) {
      return res.status(400).json({
        success : false, 
        message : "password doesn't match"
      });
    }

    const SECRET_KEY = "AUTHSYSTEM";

   const token =  jwt.sign(
    {id : registeredUser._id},
    SECRET_KEY ,
    {expiresIn : '1d'}
   )



    registeredUser.password = undefined;

    res.status(200).json({
      success: true,
      message: "Logged In successfully",
      token
    });
  } catch (err) {
    console.log("login err : ", err);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

module.exports = router;
