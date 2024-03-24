import mongodb from "./db/Index.js"
import dotenv from "dotenv";

dotenv.config({
    path : './env'
})

mongodb() 



/*
import express from "express";
import { error } from "console";
const app = express()

(async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI} / ${DB_NAME}`);
        app.on("error" , (error) => {
            console.log("ERROR" ,   error);
            throw  error; ;
        })

        app.listen(process.env.PORT , ()=>{
            console.log(`app is listening at ${process.env.PORT}`);
        })
 
         
    } catch (error) {
        console.error("ERROR :" , error);
    }
})()
*/
