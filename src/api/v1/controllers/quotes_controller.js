const QuoteRequest = require('../classes/quote_request_class')
const inputError = require('../errors/input_errors')
const {getExchangeRate} = require('../services/quote_service')
const {frankfurterAPI, exchangerateAPI} = require('../services/api_urls')
const {checkBestRate} = require('../services/helper_functions')
const Quote = require('../classes/quote_class')

const getQuotes = async (req, res) => {
    try {
    //Create a new instance of a quote
    const quoteRequestInstance = new QuoteRequest(req.query.from_currency_code.toUpperCase(), req.query.amount, req.query.to_currency_code.toUpperCase())
    //Check input of the user
    inputError(quoteRequestInstance)
    //Getting the quotes, runs in parallel
    await Promise.all([getExchangeRate(exchangerateAPI, quoteRequestInstance), getExchangeRate(frankfurterAPI, quoteRequestInstance)])
    const bestRateAPI = checkBestRate(exchangerateAPI, frankfurterAPI)
    //Creating the quote to be returned
    const finalQuote = new Quote(quoteRequestInstance.to_currency_code, bestRateAPI.rate, bestRateAPI.name)
    finalQuote.setAmount(quoteRequestInstance.amount)
    //Sending the quote to the client
    res.send(finalQuote)
    } catch (error) {
        return res.send(error.message)
    }
}

module.exports = {getQuotes}
 
