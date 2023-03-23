const singup = require("../model/singupmodel")
const jwt = require("jsonwebtoken")
const bycrpt = require("bcrypt")

const getsing = async (req, res) => {
    try {
        const data = await singup.findOne({})
        res.send(data)
    } catch (error) {
        res.send(error)
    }

}


const postsing = async (req, res) => {
    try {
        const { fistname, lastname, password, email, gender } = req.body
        if (!fistname || !lastname || !password || !email || !gender) {
            res.status(400).json({ error: "some fail is missimg" })
        }
        let checkemail = email.includes("@gmail.com")
        if (!checkemail) {
            res.status(400)
            res.status(400).json({error:"please add the @gmail.com"})
        }
        const hashingpass = await bycrpt.hash(password, 10)

        const data = await singup.create({
            fistname,
            lastname,
            password: hashingpass,
            email,
            gender
        })

        res.status(201).json({
            fistname: data.fistname,
            lastname: data.lastname,
            email: data.email,
            gender: data.gender,
            token: generateToken(data._id)
        })
    } catch (error) {
        res.status(404).json({ error: "data is not found" })
    }

}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const data = await singup.findOne({ email })
        if (data && bycrpt.compare(data.password == password)) {
            res.status(200).json({
                fistname: data.fistname,
                gender: data.gender
            })
        }
    } catch (error) {
        res.status(404).json({ error: "data is not found" })

    }

}





const updates = async (req, res) => {

try {
    const data = await singup.findById(req.params._id)
    if (!data) {
        res.status(401).json({ massage: "id is not define" })
    }
    let updatedata = await singup.findByIdAndUpdate(req.params._id, req.body, {
        new: true
    })
    console.log("=========>", updatedata)
    res.status(200).json({
        token: generateToken({ massage: `data is update ` })
    })
} catch (error) {
    res.status(404).json({ error: "data is not found" })
    
}

 
}



const deletes = async (req, res) => {
try {
    const data = await singup.findById(req.params._id)
    if (!data) {
        res.status(401).json({ massage: "id is not define" })
    }
    if (generateToken) {
        await data.remove()
    }
    res.status(200).json({
        token: generateToken({ massage: `data is delete` })
    })
} catch (error) {
    res.status(404).json({ error: "data is not found" })
    
}

    
}



const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}





module.exports = {
    getsing,
    postsing,
    deletes,
    updates,
    login
}