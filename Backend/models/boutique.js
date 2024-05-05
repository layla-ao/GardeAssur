const mongoose = require('mongoose')

const BoutiqueSchema = new mongoose.Schema({
  Nom_Boutique : String,
  Local: String,
 Téléphone: Number,
});


module.exports = mongoose.model('Boutique', BoutiqueSchema)