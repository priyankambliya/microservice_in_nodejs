
//  THIS IS MY CUSTOMER SIDE PAGE VIEW  //

const express = require("express")

const app = express()

app.get('/',(request,response)=>{
    return response.json({message:"This is customer side.."})
})

app.listen(4001,()=>{
    console.log("CUSTOMER SERVER STATING AT PORT:4001...")
})