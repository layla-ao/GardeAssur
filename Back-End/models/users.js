const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    Nom : String,
    Age: Number,
    Adresse: String,
    Email: String,
    Telephone : String
})

module.exports = mongoose.model('User', UserSchema)