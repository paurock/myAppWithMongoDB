const express = require("express");
const router = express.Router()
const Person = require("./person")

router.get("/persons", (req, res)=>{
    res.send({method: "GET"})
})

router.post("/persons", (req, res)=>{
    Person.create(req.body)
    .then(person=> res.send(person))
    })

router.put("/persons/:id", (req, res)=>{
    res.send({method: "PUT"})
})

router.delete("/persons/:id", (req, res)=>{
    res.send({method: "DELETE"})
})

module.exports = router

