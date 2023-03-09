const express = require('express');
const { login, register } = require('../controllers/account.controller');
const AccountRouter = express.Router()

AccountRouter.post('/register', register);
AccountRouter.post('/login', login)

module.exports = AccountRouter