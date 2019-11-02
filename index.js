const express = require("express");
const app = express();
const db = require('./db');
const cors = require("cors")
const routerProduct = require('./product/product.routes')

app.use(cors())

app.use(routerProduct)

app.listen(8080,()=>{console.log("Server is UP!")})