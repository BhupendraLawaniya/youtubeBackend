const mongoose = require("mongoose");
const ConnectDB  = require("./src/db/db.js");
const app = require ("./src/app.js")

ConnectDB()
.then(()=>{
    app.listen (process.env.PORT || 8000, ()=>{
        console.log(`Server is running on port :${process.env.PORT}`);
        
    })
})
.catch((error)=>{
    console.log("Mongodb connection is failed !! ", error);
    
})