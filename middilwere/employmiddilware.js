const jwt = require("jsonwebtoken")
const emy = require("../model/employmodel")
const protect = async(req,res,next)=>{
    try {
        let token ;
        if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
            token = req.headers.authorization.split(" ")[1]
            const decored = jwt.verify(token,process.env.JWT_SECRET)
            req.emy= await emy.findById(decored.id)
        }
        next()
    } catch (error) {
        res.status.json(error)
    }
}

module.exports = {protect}