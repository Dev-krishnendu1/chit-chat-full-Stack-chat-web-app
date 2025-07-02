import express from"express";
import dotenv from "dotenv"
import cors from "cors"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.router.js"
import cookieParser from "cookie-parser"
import { connectDB } from "./lib/db.js";

const app=express();
dotenv.config()
app.use(express.json())
app.use(cookieParser())


app.use(cors({
     origin:"http://localhost:5173",
     credentials:true,
}));
const PORT=process.env.PORT

app.use("/api/auth",authRoutes)
app.use("api/message",messageRoutes)
app.listen(PORT,()=>{
     console.log(`Server listening on http://localhost:${PORT}`);
     connectDB()
})