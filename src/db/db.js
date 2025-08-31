const mongoose = require('mongoose');
require('dotenv').config();

const ConnectDB = async()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
        console.log(`\n MongoDB Connected !! DB HOST: ${connectionInstance.connection.host} `)
    }
    catch(error){
        console.log("MongoDB connection error", error);
        process.exit(1);
    }
}
module.exports = ConnectDB;
