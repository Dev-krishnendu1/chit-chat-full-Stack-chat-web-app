import bcrypt from "bcryptjs"
import User from "../models/user.model.js"
import { generateToken } from "../lib/Utils.js"
import cloudinary from "../lib/cloudinary.js"
export const signup=async(req,res)=>{
     const {fullName,email,password}=req.body
    try {
     if(!fullName || !email ||!password){
          return res.status(400).json({Message:"All input should be filled"})
     }
     if(password.length<6){
        return  res.status(400).json({Message:"Password should be minimum 6 charecters"})
     }
     const user=await User.findOne({email })
     if(user){
          return res.status(400).send("User already exists")
     }
     const salt=await bcrypt.genSalt(10);
     const hashPassword=await bcrypt.hash(password,salt)
     const newUser=new User({
          fullName,
          email,
          password:hashPassword,
          
     })
     if(newUser){
       generateToken(newUser._id,res);
       await newUser.save();
       res.status(201).json({
          _id:newUser._id,
          fullName:newUser.fullName,
          email:newUser.email,
          profilePic:newUser.profilePic
       })
     }
     else{
          res.status(400).send("User does not exist")
     }
    } catch (error) {
     console.log("error is occured :"+error.message);
     res.status(500).send("Internal server error")
    }
}
export const login=async(req,res)=>{
    const {email,password}=req.body;
    try{
    const user=await User.findOne({email})
    if(!user){
     res.status(400).json({message:"Invalid credentials"})
    }
     if (!password || !user.password) {
      return res.status(400).json({ message: "Invalid  credentials" });
    }
    const isCorrectPassword=bcrypt.compare(password,user.password)
    if(!isCorrectPassword){
     res.status(400).json({message:"Invalid credentials"})
    }
    generateToken(user._id,res);
     res.status(200).json({
          _id:user._id,
          fullName:user.fullName,
          email:user.email,
          profilePic:user.profilePic
       })

}catch(err){
     console.log("error in login "+err.Message);
      res.status(500).send("Internal server error")
}
}
export const logout=(req,res)=>{
    try {
     res.cookie("jwt","",{maxAge:0})
     res.status(200).json({message:"Logged out succesfully"})
    } catch (error) {
      console.log("error in logout "+err.Message);
      res.status(500).send("Internal server error")
    }
}
export const updateProfile=async(req,res)=>{

try {
     const {profilePic} =req.body;
     const userId=req.user._id;
     if(!profilePic){
       res.status(400).json({Message:"profile pic is required"})
     }

     const uploadResponse=await cloudinary.uploader.upload(profilePic)
     const updateUser=await User.findByIdAndUpdate(userId,{profilePic:uploadResponse.secure_url},{new:true})
     res.status(200).json(updateUser)
} catch (error) {
      console.log("error in update profile "+err.Message);
      res.status(500).send("Internal server error")
}
}
export const checkAuth=(req,res)=>{
 try {
     res.status(200).json(req.user)
     console.log(req.user);
    } catch (error) {
      console.log("error in checkAuth "+err.Message);
      res.status(500).send("Internal server error")
    }
}