
const Sku = require('./sku.model')

const getSku = (req,res)=>{
    Sku
    .find({}).populate('product').then((products)=>{res.json(products).status(204)})
}
module.exports = {
    getSku
}