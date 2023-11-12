import mongoose from "mongoose";
import { DB_NAME } from "../utils/constant.js";

export const connectDB = async () => {
      try {
          const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`, {
              useNewUrlParser: true,
              useUnifiedTopology: true,
          });
  
          console.log(`MongoDB connected!! DB HOST: ${connectionInstance.connection.host}`);
      } catch (error) {
          console.error("MongoDB connection FAILED", error);
          process.exit(1);
      }
  };