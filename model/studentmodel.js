const mongoose = require("mongoose")
const student = new mongoose.Schema({
    name: { type: String },
    coursse: { type: Object },
    email: { type: String },
    subject: { type: Object },
    number: { type: String },


})

module.exports = mongoose.model("std", student)

