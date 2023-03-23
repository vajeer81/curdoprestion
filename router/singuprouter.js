const express = require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())
const { getsing, postsing, updates, deletes, login } = require("../controller/singupcontroller")
const { protect } = require("../middilwere/singupmiddilwere")

Router.post("/", postsing)
Router.post("/login", login)
Router.get("/", getsing)
Router.put("/:_id", protect, updates)
Router.delete("/:_id", protect, deletes)


module.exports = Router