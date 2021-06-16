const asyncHandler = require('express-async-handler');
const { rawListeners } = require('../Models/Users');
const User = require("../Models/Users");

const getallUser = asyncHandler(async(req,res)=>{
    res.send("i will not work now")
})
const createUser = asyncHandler(async(req,res) => {
  const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
  });
  try {
      const registration = await user.save();
      res.json({
          message : "created successfully",
          body: registration
      });
  } catch (error) {
      res.json({message: error});
  }
 
    
})

module.exports = {
    createUser,
    getallUser
}