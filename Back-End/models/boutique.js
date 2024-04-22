const mongoose = require('mongoose')


const BoutiqueSchema = new mongoose.Schema({
    Nom_Boutique : String,
    Local: String,
    Nom_Prod: String,
    Img_Prod: String,
    Couleur_Prod: String,
    Prix_Prod: Number
})



const Img_Prod = mongoose.model('Image', {
  url: String,
});

const adminBro = {
  resources: [
    {
      resource: Img_Prod,
      options: {
        properties: {
          url: { isVisible: { list: true, show: true, edit: true } },
          // Autres champs visibles dans AdminBro
        },
      },
    },
  ],
  // Autres options de configuration
};

module.exports = mongoose.model('Boutique', BoutiqueSchema)