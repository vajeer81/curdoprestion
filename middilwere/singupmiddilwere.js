const jwt = require("jsonwebtoken")
const sing = require("../model/singupmodel")
const protect = async(req,res,next)=>{
    try {
        let token;
        if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
            token = req.headers.authorization.split(" ")[1]
            const decored = jwt.verify(token,process.env.JWT_SECRET)
            req.sing = await sing.findById(decored.id)
        }
        next()
    } catch (error) {
        res.status.json(error)
    }
}

module.exports = {protect}