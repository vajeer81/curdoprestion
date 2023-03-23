const mongoose = require("mongoose")
const Singupschema = new mongoose.Schema({
    fistname: {
        type: String,
        required: [true, "please add the fistname"]

    },
    lastname: {
        type: String,
        required: [true, "please add the lastname"]

    },
    email: {
        type: String,
        required: [true, "please add the email"]

    },
    password: {
        type: String,
        required: [true, "please add the password"]

    },
    gender: {
        type: String,
        required: [true, "please add the gender"]

    }
})


module.exports = mongoose.model("singup", Singupschema);