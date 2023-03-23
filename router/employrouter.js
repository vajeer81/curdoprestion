const express= require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())
const {empget,postemp,putemp,deletemp,employid}  = require("../controller/employcontroller")

Router.get("/",empget)
Router.post("/",postemp)
Router.get("/me/:_id",employid)
Router.put("/:_id",putemp)
Router.delete("/:_id",deletemp)


module.exports  = Router