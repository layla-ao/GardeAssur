const mongoose = require('mongoose')
const uri = 'mongodb://localhost:27017/assur_db'
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
const conexion = mongoose.connection

module.exports = conexion