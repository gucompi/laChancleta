const router = require('express').Router()
const skuController = require('./sku.controller')


router.get("/stock/sku",skuController.getSku)


module.exports = router