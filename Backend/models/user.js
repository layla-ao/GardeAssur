const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const joi = require('joi');
const passwordComplexity = require("joi-password-complexity")


const userSchema = new mongoose.Schema({
    nom:{type: String, require:true},
    prénom:{type: String, require:true},
    email:{type: String, require:true},
    password:{type: String, require:true},
});

userSchema.methods.generateAuthToken= function(){
    const token = jwt.sign({_id: this_id}, process.env.allowedAdress,{expiresIn:"7d"
})
return token
};

const User = mongoose.model("user", userSchema);

const validate = (data) =>{
    const schema = joi.object({
        firstName:joi.string().required().label("FirstName"),
        lastName:joi.string().required().label("LastName"),
        email:joi.string().email().required().label("Email"),
        password:passwordComplexity().required().label("Password")


    });
    return schema.validate(data)
};

module.exports = {User, validate};