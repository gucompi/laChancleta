const mongoose = require("mongoose");
const productSchema =new mongoose.Schema({
    nombre:String,
    categoria:String
})
module.exports = mongoose.model('product',productSchema)