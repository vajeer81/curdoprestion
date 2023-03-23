const student = require("../model/studentmodel")


const studentget  = async (req, res) => {
    try {
        const data = await student.find({})
        if (!data) {
            res.status(404).json({ error: "data not found" })
        }
        res.status(200).json(data)
    } catch (error) {
        res.status(200).json(error)
    }

}

const subjectfindid = async (req, res) => {
    try {
        const data = await student.findById(req.params._id)
        if (!data) {
            res.status(404).json({ error: "data not found" })
        }
        res.status(200).json(data)
    } catch (error) {
        res.status(200).json(error)
    }

}


const studentpost = async (req, res) => {

    try {
        const { name,  coursse, email, subject, number, } = req.body
        if (!name || !coursse || !email || !subject || !number) {
            res.status(400).json({ error: "missing filds" })
        }
        const data = await student.create({
            name,
            email,
            number,
             coursse,
            subject,
        })
        res.status(201).json({
            token: generateToken(data._id)

        })

    } catch (error) {
        res.status(404).json(error)
    }

}

const putstdudent = async (req, res) => {
    try {
        const data = await student.findById(req.params._id)
        if (!data) {
            res.status(401).json({ massage: "id is not define" })
        }
        let updatedata = await student.findByIdAndUpdate(req.params._id, req.body, {
            new: true
        })
        console.log("=========>", updatedata)
        res.status(201).json(updatedata)
    } catch (error) {
        res.status.json(error);
    }


}

const deletestudent = async (req, res) => {

    try {
        let findid = await student.findById(req.params._id);
        if (!findid) {
            res.status(400);
            res.send("user not found");
        }
        await findid.remove();

        res.status(200).json({ message: `delete data ${req.params._id}` });
    } catch (error) {
        res.status(404).json(error)
    }

}

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "20d" })
}

module.exports = {studentget,studentpost,putstdudent,deletestudent,subjectfindid }