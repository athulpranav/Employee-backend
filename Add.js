const BodyParser = require("body-parser")
const Express=require("express")
const Cors=require("cors")
const Mongoose=require("mongoose")


var app=Express()

app.get("/",(req,res)=>{
    res.send("welcome to my employee website")
})
app.get("/add",(req,res)=>{
    res.send("add details")
})

app.get("/search",(req,res)=>{
    res.send("employee search page")

})

app.get("/delete",(req,res)=>{
    res.send("employee delete page")

})

app.get("/edit",(req,res)=>{
    res.send("employee editing page")
})

app.listen(3000)