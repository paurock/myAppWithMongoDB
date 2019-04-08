const express = require("express");
const router = express.Router()

router.get("/persons", (req, res)=>{
    res.send({method: "GET"})
})

router.post("/persons", (req, res)=>{
    res.send({method: "POST"})
})

router.put("/persons/:id", (req, res)=>{
    res.send({method: "PUT"})
})

router.delete("/persons/:id", (req, res)=>{
    res.send({method: "DELETE"})
})

module.exports = router
