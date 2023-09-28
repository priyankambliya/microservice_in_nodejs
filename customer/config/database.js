const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/micro-service")
.then(()=>{
    console.log("databse connection established..")
})
.catch((error)=>{
    console.log(error)
})