const router = require('express').Router()
const productController = require('./product.controller')
const passport = require('passport');


function authenticateJwt(req, res, next) {
    passport.authenticate('jwt', function(err, user, info) {
      if (err) return next(err);
      if (!user) res.redirect("http://google.com.ar/");
      req.user = user;
      next();
    })(req, res, next);
  }

router.get("/stock/products", authenticateJwt ,productController.getProducts)
router.get("/stock/product/:pepe",productController.getProduct)
router.post("/stock/product",productController.createProduct)



module.exports = router