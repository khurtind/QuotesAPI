const fetch = require('cross-fetch')
const {frankfurterAPI, exchangerateAPI, attachInputToAPI} = require('./api_urls')
const {httpStatusCodes, checkServerErrors} = require('../errors/http_errors')

const getExchangeRate = async (exchangeAPI, quoteRequestInstance) => {
    const url = attachInputToAPI(exchangeAPI, quoteRequestInstance.fromCurrency)
    try {
        const response = await fetch(url)
        //Check for http errors
        if(response.status != httpStatusCodes.OK) {
            checkServerErrors(response)
        }
        const responseJSON = await response.json()
        //Assigning the exchange rate
        if(exchangeAPI.name === frankfurterAPI.name){
            frankfurterAPI.setRate = responseJSON.rates[quoteRequestInstance.toCurrency]
        } else {
            exchangerateAPI.setRate = responseJSON.rates[quoteRequestInstance.toCurrency]
        }
    } catch (error) {
        throw error
    }
    return
}
module.exports = {getExchangeRate}