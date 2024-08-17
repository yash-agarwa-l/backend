import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import todoRoutes from "../routes/routes.js";
const app= express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))  // use is mostly used for middlewares and configurations.

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"})) // how url is shown while we type in any command
app.use(express.static("public"))// to store some global data in server, incase of any need
app.use(cookieParser())

app.use('/api', todoRoutes);  // Added '/api' to namespace the routes if needed

export default app;


