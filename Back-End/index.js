var express = require("express");
var mongoclient = require("mongodb").mongoclient;
var cors = require("cors");
const multer = require("multer");
const mongoose = require('mongoose');

var app = express();

app.use(cors({ }));
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/crud")

const UserSchema = mongoose.Schema({
    name : String ,
    age : Number
})
app.get('/', (req, res) => {
    res.send('Hello World!');
});
const UserModel = mongoose.model("users",UserSchema)
app.get("/users",(req,res) => {
    req.json(UserModel.find())
})

app.listen( 3001, () => {
    console.log("Server is running on http://localhost:3001")
} )

