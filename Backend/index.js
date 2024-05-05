const express = require("express");
const cors = require("cors");
const multer = require("multer");
const mongoose = require('mongoose');
const AdminBro = require('admin-bro');
const adminbro = require('admin-bro');
const expressadminbro = require('@admin-bro/express');
const mongooseadminbro = require('@admin-bro/mongoose');
const path = require('path');

const app = express();
const uri = 'mongodb://localhost:27017/assur_db';
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Configuration de multer pour l'upload d'images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
});
const upload = multer({ storage: storage });

app.use(cors());
app.use(express.json());

const users = require('./models/users');
const assur = require('./models/assur');
const boutique = require('./models/boutique');
const reparation = require('./models/reparation');
const produits = require('./models/produits');

adminbro.registerAdapter(mongooseadminbro);

const adminBroOptions = {
  resources: [
    {
      resource: users
    },
    {
      resource: assur
    },
    {
      resource: boutique
    },
    {
      resource: reparation
    },
    {
      resource: produits,
      options: {
        properties: {
          imageUrl: {
            isVisible: { edit: true, list: true, show: true },
          },
          Nom_Produit: { isVisible: { edit: true, list: true, show: true } },
          Modele: { isVisible: { edit: true, list: true, show: true } },
          Couleur: { isVisible: { edit: true, list: true, show: true } },
          Ram: { isVisible: { edit: true, list: true, show: true } },
          Num_serie: { isVisible: { edit: true, list: true, show: true } },
          Prix: { isVisible: { edit: true, list: true, show: true } },
          image: {
            isVisible: { edit: true, list: true, show: true },
            components: {
              edit: AdminBro.bundle('./component/MyFileComponent'), // Le composant pour l'édition de l'image
            },
          },
        },
      },
    },
  ],
};


const adminBro = new adminbro(adminBroOptions);
const router = expressadminbro.buildRouter(adminBro);
app.use(adminBro.options.rootPath, router);

// Route pour gérer l'upload d'images
app.post('/upload', upload.single('image'), (req, res) => {
  res.send('Image uploaded successfully');
});

app.get('/', (req, res) => {
  res.redirect(adminBro.options.rootPath);
});
app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});
