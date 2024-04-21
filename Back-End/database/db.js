const mongoose = require('mongoose')
const uri = 'mongodb://localhost/database'
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
const conexion = mongoose.connection

module.exports = conexion