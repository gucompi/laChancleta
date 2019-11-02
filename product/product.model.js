const mongoose = require("mongoose");
const productSchema =new mongoose.Schema({
    nombre:String
})
module.exports = mongoose.model('product',productSchema)