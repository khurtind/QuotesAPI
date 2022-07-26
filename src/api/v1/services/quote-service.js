const fetch = require('cross-fetch')
const {httpStatusCodes, validateServerErrors} = require('../errors/http-errors')

const getExchangeRate = async (apiArray) => {
    try {
        const requests = []
        apiArray.forEach(api => {
            requests.push(fetch(api.fullURL))
        })
        const responses = await Promise.all(requests)
        //Check for http errors
        validateServerErrors(responses, apiArray)
        //Make JSON out of the requests
        const responsesJSON = responses.map((response) => response.json())
        const data = await Promise.all(responsesJSON)
        //Assigning the exchange rate
        data.forEach((response, index) => {
            if(response.url === apiArray.fullURL){
                console.log(apiArray[index].setRate(response.rates[apiArray[index].getToCurrency()]))
            }
        })
    } catch (error) {
        throw error
    }
    return
}
module.exports = {getExchangeRate}