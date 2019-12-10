const router = require('express').Router()
const userController = require('./user.controller')

const passport = require('passport');


router.post("/user/register",userController.register)
router.post("/user/login",userController.login)


module.exports = router