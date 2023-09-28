
//  THIS IS MY GATEWAY SIDE PAGE VIEW  //

const express = require("express")
const cors = require("cors")
const proxy = require("express-http-proxy")

const app = express()

app.use(express.json())
app.use(cors())

app.use('/customer',proxy('http://localhost:4001'))
app.use('/shopping',proxy('http://localhost:4002'))
app.use('/',proxy('http://localhost:4003'))

app.listen(4000,()=>{
    console.log("SERVER STATING AT PORT:4000...")
})  