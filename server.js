const express = require("express")
const app = express()
require("dotenv").config()
/* ------------------------ import http from node js ------------------------ */
const http = require('http').Server(app)
/* ---------------------------- include socket io --------------------------- */
const io = require('socket.io')(http)

const port = process.env.PORT 

app.get('/',(req,res)=>{
    res.send("home page")
})


http.listen(port, ()=>{
    console.log("this server is running")
})
