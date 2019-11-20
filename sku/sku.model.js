const mongoose = require("mongoose");
const Product = mongoose.model('product');
const skuSchema =new mongoose.Schema({
    estado:String,
    
    
})
module.exports = mongoose.model('Sku',skuSchema)