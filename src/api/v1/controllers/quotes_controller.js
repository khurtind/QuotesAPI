const QuoteRequest = require('../classes/quote_request_class')
const {validateQuery} = require('../errors/input_errors')
const {getExchangeRate} = require('../services/quote_service')
const {frankfurterAPI, exchangerateAPI} = require('../services/api_urls')
const {checkBestRate} = require('../services/helper_functions')
const Quote = require('../classes/quote_class')

const getQuotes = async (req, res) => {
    try {
    //Check query parameters
    const {fromCurrency, amount, toCurrency} = validateQuery(req.query)
    //Create an instance of a quote request
    const quoteRequestInstance = new QuoteRequest(fromCurrency,amount,toCurrency )
    //Getting the quotes, runs in parallel
    await Promise.all([getExchangeRate(exchangerateAPI, quoteRequestInstance), getExchangeRate(frankfurterAPI, quoteRequestInstance)])
    const bestRateAPI = checkBestRate(exchangerateAPI, frankfurterAPI)
    //Creating the quote to be returned
    const finalQuote = new Quote(toCurrency, bestRateAPI.rate, bestRateAPI.name)
    finalQuote.setAmount(amount)
    //Sending the quote to the client
    res.send(finalQuote)
    } catch (error) {
        return res.send(error.message)
    }
}

module.exports = {getQuotes}
 
