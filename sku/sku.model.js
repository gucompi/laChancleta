const mongoose = require("mongoose");
const Product = mongoose.model('product');
const skuSchema =new mongoose.Schema({
    estado:String,
    product:[{type: mongoose.Schema.Types.ObjectId, ref: 'product'}]
})
module.exports = mongoose.model('Sku',skuSchema)