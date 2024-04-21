const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    UserName : String,
    age: {type: Number, min:18, index:true, visible: true},
    adresse:String
})
module.exports = mongoose.model('User', UserSchema)