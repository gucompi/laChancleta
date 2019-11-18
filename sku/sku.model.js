const mongoose = require("mongoose");

const skuSchema =new mongoose.Schema({
    estado:String,
    product:{type:mongoose.Schema.Types.ObjectId, ref:'Product'}
    
})
module.exports = mongoose.model('Sku',skuSchema)