const currencyLength = 3
const inputErrors = {
    missingArguemntInQuery: 'An argument in your query is missing, or it is misspelled',
    wrongCurrency: 'Provided currency code is not correct',
    notNumber: 'Provided amount should be only a positive number'
}

const validateQuery = (query) => {
    //Make sure all neccessary parts are in place
    if(!query.from_currency_code || !query.amount || !query.to_currency_code){
        throw new Error(inputErrors.missingArguemntInQuery)
    }
    //Make sure the length of the currency equals 3
    if(query.from_currency_code.length !== currencyLength || query.to_currency_code.length !== currencyLength ){
        throw new Error(inputErrors.wrongCurrency)
    }
    //Make sure amount is a number and positive
    if(typeof query.amount === 'string'){
        const num = Number(query.amount)
        if(!Number.isInteger(num) || num < 0){
            throw new Error(inputErrors.notNumber)
        }
    }
    const fromCurrency = query.from_currency_code.toUpperCase()
    const amount = query.amount
    const toCurrency = query.to_currency_code.toUpperCase()
    return {
        fromCurrency,
        amount,
        toCurrency
    }
}
module.exports = {validateQuery}