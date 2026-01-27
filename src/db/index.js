import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

const connectDB = async ()=>{
    try {
        // console.log(`Hehehehehe: ${process.env.MONGODB_URI}/${DB_NAME}`);
        const connectionObj = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log("Connected DB Instance: ", connectionObj);
        // console.log("Connected DB Instance internal data: ", connectionObj.connection.host);

        console.log("db is connected")
    } catch (error) {
        console.log("Mongo Connection ERR: ", error);
        process.exit(1)
    }
}

export default connectDB