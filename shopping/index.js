
//  THIS IS MY SHOPPING SIDE PAGE VIEW  //

const express = require("express")

const app = express()

app.get('/',(request,response)=>{
    return response.json({message:"This is shopping side.."})
})

app.listen(4003,()=>{
    console.log("SHOPPING SERVER STATING AT PORT:4003...")
})