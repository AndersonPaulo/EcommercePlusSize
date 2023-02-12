const express = require("express")
const server = express()

const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{
    express: server,
    noCache:true
})

server.use(express.static("public"))

server.get("/",(req,res)=>{
    return res.render("index.html")
})
server.get("/contato",(req,res)=>{
    return res.render("contato.html")
})

server.listen(3000)