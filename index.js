const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const cors = require('cors')

const app = express();

mongoose.connect("mongodb://localhost/persons-db", { useNewUrlParser: true })

app.use(cors())
app.use(bodyParser.json())
app.use("/api", require("./api"))

app.listen(5000, ()=>{
    console.log("server is listening")
})
