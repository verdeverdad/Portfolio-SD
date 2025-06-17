const express = require("express")
const path = require("path")
const app = express()
const PORT = 3002

app.use(express.static(__dirname + "/static"));

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    next()
})
app.get("/", (req, res)=>{
    res.send("Servidor funcionando!!!")
})


app.listen(PORT, ()=>{
    console.log("Escuchando a http://localhost:" + PORT)
});