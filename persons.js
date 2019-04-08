const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PersonSchema = new Schema({
    name: String,
    age: Number,
    status: String
})

const Person = mongoose.model("person", PersonSchema)

module.exports = Person