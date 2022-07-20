class QuoteRequest {
    constructor(fromCurrency, amount, toCurrency){
        this.fromCurrency = fromCurrency
        this.amount = amount
        this.toCurrency = toCurrency
    }
}

module.exports = QuoteRequest