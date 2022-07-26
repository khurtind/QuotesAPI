const express = require('express')
const router = express.Router()
const quotesController = require('../controllers/quotes-controller')
const defaultController = require('../controllers/default-controller')

router.get('/api/quote', quotesController.getQuotes)

router.get('/*', defaultController.defaultHandler)

module.exports = router