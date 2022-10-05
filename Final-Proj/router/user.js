const express = require('express')
const router = express.Router()

const user_handler = require('../router_handler/user')

const expressJoi = require('@escook/express-joi')
const {reg_login_schema} = require('../schema/user')

// register new user
router.post('/reguser', expressJoi(reg_login_schema), user_handler.regUser)
// login in
router.post('/login', expressJoi(reg_login_schema), user_handler.login)

module.exports = router