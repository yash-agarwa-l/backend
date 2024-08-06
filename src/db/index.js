import mongoose from "mongoose";
import { DB_Name } from "../constants.js";
import app from "../app.js";

const connectdb=async () => {
    try {
        const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Error connecting the db: ",error);
        process.exit(1);
    }
}

export default connectdb;