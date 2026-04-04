const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "connected successful",
  });
});

router.post("/", async (req, res) => {
  try{
    const { username, email, password } = req.body;
    console.log(req.body);
  }catch(err){
    req.status(400).json({
      success : false, 
      message : "Inventory Server False"
    })
  }
});

module.exports = router;
