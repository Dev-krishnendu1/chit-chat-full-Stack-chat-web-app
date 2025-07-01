import jwt from "jsonwebtoken"
import User from "../models/user.model.js";

export const protectRoute=async (req,res,next)=>{
 try {
     const token=req.cookie.jwt;
     if(!token){
          res.status(401).json({message:"Unauthorized -No token provided."})
     }
     const decoded=jwt.verify(token,process.env.JWT_SECRET)
     if(!decoded){
           res.status(401).json({message:"Unauthorized - Invalid token ."})
     }
     const user=await User.findById(decoded.userId).select("-password");
     if(!user){
          res.status(400).json({message:"User not found!"})
     }
     req.user=user;
     next();
 } catch (err) {
    console.log("error in middleware "+err.Message);
      res.status(500).send("Internal server error") 
 }
}