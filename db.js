const mongoose = require("mongoose")
//
const mongourl = "mongodb://localhost:27017/hotels"


mongoose.connect(mongourl,{
  
})
const db = mongoose.connection;
//
db.on("connected",()=>{
    console.log("connected to mongodb server")
})
db.on("error",()=>{
    console.log("mongodb connection error")
})
db.on("disconnected",()=>{
    console.log("mongodb disconnected")
})

//it is used for exporting
module.exports = db;