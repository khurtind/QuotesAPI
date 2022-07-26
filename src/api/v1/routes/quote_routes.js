const express = require('express')
const router = express.Router()
const quotesController = require('../controllers/quotes_controller')
const defaultController = require('../controllers/default_controller')

router.get('/api/quote', quotesController.getQuotes)

router.get('/*', defaultController.defaultHandler)

module.exports = router