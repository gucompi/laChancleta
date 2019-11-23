const express = require("express");
const app = express();
const db = require('./db');
const cors = require("cors")
const routerProduct = require('./product/product.routes')
const routerSku = require('./sku/sku.routes')
const bodyParser = require('body-parser')
const routerImageProd = require('./images/products/images.product.route')

app.use(bodyParser.json())
app.use(cors())

app.use(routerProduct)
app.use(routerSku)
app.use(routerImageProd)

app.listen(8080,()=>{console.log("Server is UP in port 8080, try localhost:8080/stock/products!")})