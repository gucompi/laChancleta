const router = require('express').Router()
const {getImageProd} = require('./images.product.controller'); 
router.get('/product/image/:idProd?',getImageProd)



module.exports = router