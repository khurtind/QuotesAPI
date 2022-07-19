const frankfurterAPI = { 
    name: 'Frankfurter',
    url: 'https://api.frankfurter.app/latest?from=',
    rate: null,
    set setRate(rate){
        this.rate = rate
    },
    get getRate(){
        return this.rate
    }
}
const exchangerateAPI = {
    name: 'Exchangerate',
    url:'https://api.exchangerate-api.com/v4/latest/',
    rate: null,
    set setRate(rate){
        this.rate = rate
    },
    get getRate(){
        return this.rate
    }
}

attachInputToAPI = (exchangeAPI, currencyCode) => {
    if(exchangeAPI.name === frankfurterAPI.name){
        return frankfurterAPI.url + currencyCode
    }
    return exchangerateAPI.url + currencyCode
}

module.exports = {frankfurterAPI, exchangerateAPI, attachInputToAPI}