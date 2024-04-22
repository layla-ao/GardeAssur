const mongoose = require('mongoose')

const AssurSchema = new mongoose.Schema({
    Nom_Agent : String,
    Adresse: String,
    Info: String,
    Contrat : String
})
module.exports = mongoose.model('Agent_Assurance', AssurSchema)