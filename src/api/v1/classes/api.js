class Api {
    constructor(name, baseURL){
        this.name = name
        this.baseURL = baseURL
        this.rate = null
        this.fullURL = null
        this.fromCurrency = null
        this.amount = null
        this.toCurrency = null
        this.responseStatusCode = null
    }
    setRate = (rate) => {
        this.rate = rate
    }
    getRate = () => {
        return this.rate
    }
    setFromCurrency = (fromCurrency) => {
        this.fromCurrency = fromCurrency
    }
    getFromCurrency = () => {
        return this.fromCurrency
    }
    setAmount = (amount) => {
        this.amount = amount
    }
    getAmount = () => {
        return this.amount
    }
    setToCurrency = (toCurrency) => {
        this.toCurrency = toCurrency
    }
    getToCurrency = () => {
        return this.toCurrency
    }
    setFullURL = () => {
        this.fullURL = this.baseURL + this.fromCurrency
    }
    getFullURL = () => {
        return this.fullURL
    }
    setResponseStatusCode = (responseStatusCode) => {
        this.responseStatusCode = responseStatusCode
    }
    getResponseStatusCode = () => {
        return this.responseStatusCode
    }
    
}

module.exports = {Api}