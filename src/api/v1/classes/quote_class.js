class Quote {
    constructor(currencyCode, exchangeRate, providerName) {
        this.exchangeRate = exchangeRate
        this.currencyCode = currencyCode
        this.amount = null
        this.providerName = providerName
    }
    setAmount = (amount) => {
        this.amount = amount * this.exchangeRate
    }
}

module.exports = Quote