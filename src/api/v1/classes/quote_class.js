class Quote {
    constructor(currency_code, exchange_rate, provider_name) {
        this.exchange_rate = exchange_rate
        this.currency_code = currency_code
        this.amount = null
        this.provider_name = provider_name
    }
    setAmount = (amount) => {
        this.amount = amount * this.exchange_rate
    }
}

module.exports = Quote