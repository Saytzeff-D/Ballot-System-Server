const express = require('express')
const { createElection, fetchElection } = require('../controllers/election.controller')
const ElectionRouter = express.Router()

ElectionRouter.post('/create', createElection)
ElectionRouter.post('/all', fetchElection)

module.exports = ElectionRouter