class Quote {
    constructor(currencyCode, exchangeRate, amount, providerName) {
        this.exchangeRate = exchangeRate
        this.currencyCode = currencyCode
        this.amount = amount * exchangeRate
        this.providerName = providerName
    }
}

module.exports = {Quote}