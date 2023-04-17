const express = require("express")
const app = express()
require("dotenv").config()

const port = process.env.PORT 

app.get('/',(req,res)=>{
    res.send("home page")
})


app.listen(port, ()=>{
    console.log("this server is running")
})
