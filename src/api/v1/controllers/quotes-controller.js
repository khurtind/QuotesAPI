const {Quote} = require('../classes/quote')
const {apiArray} = require('../services/api-list')
const {validateQuery} = require('../errors/input-errors')
const {getExchangeRate} = require('../services/quote-service')
const {checkBestRate} = require('../services/helper-functions')


const getQuotes = async (req, res) => {
    try {
    //Check query parameters
    const {fromCurrency, amount, toCurrency} = validateQuery(req.query)
    apiArray.forEach(api => {
        api.setFromCurrency(fromCurrency)
        api.setAmount(amount)
        api.setToCurrency(toCurrency)
        api.setFullURL()
    });
    //Getting the quotes, runs in parallel
    // await Promise.all([getExchangeRate(apiArray[0]), getExchangeRate(apiArray[1])])
    await getExchangeRate(apiArray)
    const bestRateAPI = checkBestRate(apiArray)
    //Creating the quote to be returned
    const finalQuote = new Quote(toCurrency, bestRateAPI.rate, amount, bestRateAPI.name)
    //Sending the quote to the client
    res.send(finalQuote)
    } catch (error) {
        return res.send(error.message)
    }
}

module.exports = {getQuotes}
 
