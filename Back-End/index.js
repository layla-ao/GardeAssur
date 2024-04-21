var express = require("express")
var cors = require("cors")
const multer = require("multer")
const mongoose = require('mongoose')
const adminbro = require('admin-bro')
const expressadminbro = require('@admin-bro/express')
const mongooseadminbro = require('@admin-bro/mongoose')

var app = express();

mongoose.connect('mongodb://localhost:27017/assur_db', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(cors({ }));
app.use(express.json());
// connection à bd 


const users = require('./models/users')

adminbro.registerAdapter(mongooseadminbro)
const adminbroOptions = {resources: [users]}

const adminBro = new adminbro(adminbroOptions)
const router = expressadminbro.buildRouter(adminBro)
app.use(adminBro.options.rootPath, router)
app.use('/', router);


// Middleware pour gérer le téléchargement de fichiers
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route pour télécharger une image et enregistrer l'utilisateur dans la base de données
app.post('/upload', upload.single('image'), async (req, res) => {
    try {
        // Création d'un nouvel utilisateur avec les données de l'image
        const newUser = new User({
            nombre: req.body.nombre,
            edad: req.body.edad,
            pais: req.body.pais,
            image: {
                data: req.file.buffer,
                contentType: req.file.mimetype
            }
        });
        
        // Enregistrement de l'utilisateur dans la base de données
        await newUser.save();
        
        res.status(201).send('Utilisateur créé avec succès.');
    } catch (error) {
        console.error('Erreur lors de la création de l\'utilisateur:', error);
        res.status(500).send('Erreur lors de la création de l\'utilisateur.');
    }
});



app.get('/', (req, res) => {
    res.send('Dashboard con Node');
});


app.listen( 3001, () => {
    console.log("Server is running on http://localhost:3001")
} )

