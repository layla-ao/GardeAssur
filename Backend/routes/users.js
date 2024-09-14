const {User, validate } = require('../models/user');
const bcrypt = require("bcrypt");
const router = require('express').Router();
router.get("/", async(req, res) => {
    try {
        const users = await User.find(); // Récupère tous les utilisateurs
        res.status(200).send(users); // Renvoie les utilisateurs sous forme de réponse
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
})
router.post("/", async(req, res)=>{
    try {
        const{error} = validate(req.body);
        if(error)
           return res.status(400).send({message: error.details[0].message});
        const user = await User.findOne({email: req.body.email});
        if(user)
           return res.status(409).send({message: "User with given email already exist!"});
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        await new User({...req.body, password: hashPassword}).save();
        res.status(201).send({message: "User created successfully"})
    } catch (error) {
        res.status(500).send({message: "Internal Server Error "})
    }
})
module.exports = router;
