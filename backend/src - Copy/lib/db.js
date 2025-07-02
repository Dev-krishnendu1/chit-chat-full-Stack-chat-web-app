import mongoose from 'mongoose'

export const connectDB=async ()=>{
     try {
       const conn=   await mongoose.connect(process.env.MONGODB_URL)
       console.log(`MongoDb connected on: ${conn.connection.host}`);
     } catch (error) {
          console.log(`Error in db: ${error}`);
     }
}
