const express = require("express");
const app = express();
const db = require('./db');
const cors = require("cors")
const routerProduct = require('./product/product.routes')
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(cors())

app.use(routerProduct)

app.listen(8080,()=>{console.log("Server is UP in port 8080, try localhost:8080/stock/products!")})