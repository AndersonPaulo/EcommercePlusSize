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
server.get("/somos",(req,res)=>{
    return res.render("somos.html")
})
server.get("/entrega",(req,res)=>{
    return res.render("entrega.html")
})
server.get("/politicaDeDevolucao",(req,res)=>{
    return res.render("politicaDeDevolucao.html")
})
server.listen(3000)