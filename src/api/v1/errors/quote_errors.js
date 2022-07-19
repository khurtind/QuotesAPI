const quoteErrors = {
    to_currency_not_found: 'The currency you wanted to convert to is missing on both exchanges'
}

const checkIfNull = (exchangeRateAPI, frankfurterRateAPI) => {
    if(exchangeRateAPI.rate === undefined && frankfurterRateAPI.rate === undefined){
        throw new Error(quoteErrors.to_currency_not_found)
    } else if(exchangeRateAPI.rate === undefined) {
        return frankfurterRateAPI
    } else if(frankfurterRateAPI.rate === undefined) {
        return exchangeRateAPI
    }
    return
}

module.exports = {checkIfNull}