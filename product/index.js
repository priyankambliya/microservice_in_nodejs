
//  THIS IS MY PRODUCT SIDE PAGE VIEW  //

const express = require("express")

const app = express()

app.get('/',(request,response)=>{
    return response.json({message:"This is product side.."})
})

app.listen(4002,()=>{
    console.log("PRODUCT SERVER STATING AT PORT:4002...")
})