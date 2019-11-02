const router = require('express').Router()
const productController = require('./product.controller')


router.get("/stock/products",productController.getProducts)
router.get("/stock/product/:pepe",productController.getProduct)



module.exports = router