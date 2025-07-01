import express from"express";
import dotenv from "dotenv"
import authRouter from "./routes/auth.route.js"
import cookieParser from "cookie-parser"
import { connectDB } from "./lib/db.js";

const app=express();
dotenv.config()
app.use(express.json())
app.use(cookieParser())
const PORT=process.env.PORT
app.use("/api/auth",authRouter)
app.listen(PORT,()=>{
     console.log(`Server listening on http://localhost:${PORT}`);
     connectDB()
})