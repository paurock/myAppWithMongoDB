const express = require("express");
const router = express.Router();
const Person = require("./persons");

router.get("/persons", (req, res)=>{
    Person.find({})
    .then(person=> res.send(person))
})

router.post("/persons", (req, res)=>{
    Person.create(req.body)
    .then(person=> res.send(person))
    })
router.put("/persons/:id", (req, res)=>{
        Person.findByIdAndUpdate({_id:req.params.id}, req.body)
        .then(() => Person.findOne({_id: req.params.id}))
        .then(person => res.send(person))﻿
    })
    
router.delete("/persons/:id", (req, res)=>{
        Person.deleteOne({_id:req.params.id})
        .then(person=> res.send(person))
    })

module.exports = router
