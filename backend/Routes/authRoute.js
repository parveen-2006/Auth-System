const express = require("express");
const User = require("../models/user");
const router = express.Router();

// here i'll write the sign in / signout code !
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // console.log("hello world :", req.body);

    //add validation later 


    const registerUser = await User.findOne({email});
    console.log( "hjkd" , registerUser);

    if(registerUser){
        return res.status(409).json({
            success : false, 
            message : "User Already Exist"
        })
    }

    const newRegister = await User.create({
        username , 
        email , 
        password
    })

    res.status(201).json({
        success : true, 
        message : "Registered Successfully" , 
        newRegister
    })


  } catch (err) {
    console.log("register route"  , err)
    res.status(400).json({
      success: false,
      message: "Register failed",
    });
  }
});

module.exports = router;
