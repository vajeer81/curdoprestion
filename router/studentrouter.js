const express= require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())
const {studentget,subjectfindid,studentpost,putstdudent,deletestudent} = require("../controller/studentcontrollre")

Router.post("/",studentpost)
Router.get("/all",studentget)
Router.get("/:_id",subjectfindid)
Router.put("/:_id",putstdudent)
Router.delete("/:_id",deletestudent)

module.exports = Router