const express = require("express")
const server = express()

//public folder
server.use(express.static("public"))

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", { //express use the Template Engine
    express: server,            // and path to render
    noCache: true
})

server.get("/", (req, res) => {
    return res.render("views/index.html")
})

server.get("/create-point", (req, res) => {
    return res.sendFile("create-point.html")
})


server.listen(3000)