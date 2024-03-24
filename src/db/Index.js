import mongoose from "mongoose";



import {DB_NAME} from "../constant.js"


const mongodb = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MOngoDb connected !! DB Host : ${connectionInstance.connection.host}`)
         
    } catch (error) {
        console.error("mongo Db connection ERROR :" , error);
        process.exit(1)
    }
}
export  default   mongodb;