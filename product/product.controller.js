const Product = require("./product.model")
const Sku = require('../sku/sku.model')
const getProducts = (req,res)=>{
    Product
    .find({}).populate('skus').then((products)=>{res.json(products).status(204)})
}
const getProduct = (req,res)=>{
    Product
    .find({_id:req.params.pepe}).then((products)=>{res.json(products).status(204)})
}
const createProduct = (req,res)=>{
    console.log(req.body)
    Product.create({nombre:req.body.nombre,categoria:req.body.categoria}).then((createdProduct)=>{
        res.json(createdProduct).status(200)
    }).catch((err)=>{
        res.json(err).status(500)
    })
}
module.exports = {
    getProducts,
    getProduct,
    createProduct
}