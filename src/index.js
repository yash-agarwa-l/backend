// require ('dotenv').config({path:'./env'});

import connectdb from "./db/index.js";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({path:'./env'});

connectdb()
.then(()=> {
    app.on("error",(error)=>{
        console.log("ERROR while logging in to server");
        throw error;
    })

    app.listen(process.env.PORT||8000,()=>{
        console.log(`App is listening to port ${process.env.PORT||8000}`)
    })
})
.catch((err)=>{
    console.log("Failed to connect to mongoDB",err)
})








// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
//     } catch (error) {
//         console.error("Error: ",error)
//         throw err
//     }
// })()