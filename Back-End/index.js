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

const users = require('./models/users')

adminbro.registerAdapter(mongooseadminbro)

const adminBroOptions = {
    resources: [
      {
        resource: users,
        options: {
          properties: {
            name: { isVisible: true, isEditable: true },
            age: { isVisible: true, isEditable: true },
            adresse: { isVisible: true, isEditable: true },
          },
        },
      },
    ],
  };
  
const adminBro = new adminbro(adminBroOptions)
const router = expressadminbro.buildRouter(adminBro)
app.use(adminBro.options.rootPath, router)
module.exports = router
app.use('/', router);


app.get('/', (req, res) => {
    res.send('Dashboard con Node');
});


app.listen( 3000, () => {
    console.log("Server is running on http://localhost:3000")
} )

