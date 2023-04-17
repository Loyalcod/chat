const express = require("express")
const web = require("~routes/web")
const apis = require("~routes/api")
const socket = require("~sockets/socket")
const app = express()
require("dotenv").config()
const {resolve} = require("path")

/* ------------------------ import http from node js ------------------------ */
const http = require('http').Server(app)
/* ---------------------------- include socket io --------------------------- */
const io = require('socket.io')(http)

app.use(express.static(resolve('./home')))

const port = process.env.PORT 

web(app)
apis(app)

socket(io)


http.listen(port, ()=>{
    console.log("this server is running")
})
