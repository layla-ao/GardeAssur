const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    UserName : String,
    age: {type: Number, min:18, index:true},
    adresse:String,
    image: { data: Buffer, contentType: String } 
})
module.exports = mongoose.model('User', UserSchema)