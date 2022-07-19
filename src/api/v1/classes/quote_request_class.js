class QuoteRequest {
    constructor(from_currency_code, amount, to_currency_code){
        this.from_currency_code = from_currency_code
        this.amount = amount
        this.to_currency_code = to_currency_code
    }
}

module.exports = QuoteRequest