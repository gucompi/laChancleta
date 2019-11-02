const Product = require("./product.model")

const getProducts = (req,res)=>{
    Product
    .find({}).then((products)=>{res.json(products).status(204)})
}
const getProduct = (req,res)=>{
    Product
    .find({_id:req.params.pepe}).then((products)=>{res.json(products).status(204)})
}
module.exports = {
    getProducts,
    getProduct
}