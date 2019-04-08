const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")

const app = express();
mongoose.connect("mongodb://localhost/persons-db")

app.use(bodyParser.json())
app.use("/api", require("./api"))

app.listen(4000, ()=>{
    console.log("server is listening")
}) 
