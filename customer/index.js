
//  THIS IS MY CUSTOMER SIDE PAGE VIEW  //

require("./config/database")
const express = require("express")
const User = require("./model/users")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/',(request,response)=>{
    console.log(request)
    return response.json({message:"This is customer side.."})
})

app.post('/login', async (request,response)=>{
    console.log(request.body)
    const {
        username,
        email,
        password
    } = request.body

    await User.create({
        username,
        email,
        password
    })

    return response
    .json({message:"user create successfull..."})
})

app.listen(4001,()=>{
    console.log("CUSTOMER SERVER STATING AT PORT:4001...")
})