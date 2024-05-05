const mongoose = require('mongoose')

const ProduitSchema = new mongoose.Schema({
    imageUrl: String,
    Nom_Produit: String,
    Modele: String,
    Couleur: String,
    Ram: Number,
    Num_serie: String,
    Prix: Number,
})
module.exports = mongoose.model('Produits', ProduitSchema)