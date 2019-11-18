const mongoose = require("mongoose");
const productSchema =new mongoose.Schema({
    nombre:String,
    categoria:String,
    skuss:[{type:mongoose.Schema.Types.ObjectId,ref:'Sku'}]
})
module.exports = mongoose.model('product',productSchema)