const mongoose = require('mongoose')

const RepaSchema = new mongoose.Schema({
    Nom_Repa: String,
    Modele: String,
    Marque: String,
    Description: String
    
})
module.exports = mongoose.model('Reparation', RepaSchema)