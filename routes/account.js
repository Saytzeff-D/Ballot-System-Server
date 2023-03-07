const express = require('express')
const AccountController = require('../controllers/account.controller')
const AccountRouter = express.Router()

AccountRouter.post('/register', AccountController.register)

module.exports = AccountRouter