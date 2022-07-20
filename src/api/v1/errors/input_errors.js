const inputErrors = {
    from_currency_incorrect: 'Please provide a proper currency code to convert from',
    amount_missing: 'Please provide an amount in cents',
    to_currency_incorrect: 'Please provide a proper currency code to convert to'
}

const validateInput = (quoteRequestInstance) => {
    //Check if all the needed information is there
    if(!quoteRequestInstance.from_currency_code || quoteRequestInstance.from_currency_code.length > 3 || quoteRequestInstance.from_currency_code.length < 3){
       throw new Error(inputErrors.from_currency_incorrect)
    }
    if(!quoteRequestInstance.amount){
        throw new Error(inputErrors.amount_missing)
    }
    if(!quoteRequestInstance.to_currency_code || quoteRequestInstance.to_currency_code.length > 3 || quoteRequestInstance.to_currency_code.length < 3){
        throw new Error(inputErrors.to_currency_incorrect)
    }
}

module.exports = validateInput