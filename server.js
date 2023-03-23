const express = require('express')
const app = express()
const dotenv = require("dotenv").config()
const port = process.env.PORT || 5000
const ConnectDB = require("./config/dbconnet")
ConnectDB()
app.use(express.json())

app.use("/api/employ",require("./router/employrouter"))
app.use("/api/student",require("./router/studentrouter"))

app.listen(port, () => {
    console.log(`port is colled${port}`);
})