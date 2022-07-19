const {checkIfNull} = require('../errors/quote_errors')

const checkBestRate = (exchangerateAPI, frankfurterAPI) => {
    try{
        const exchangeAPI = checkIfNull(exchangerateAPI, frankfurterAPI)
        if(exchangeAPI){
            return exchangeAPI
        }
    } catch(error){
        throw error
    }
    if(exchangerateAPI.rate === frankfurterAPI.rate){
        //Picking an exchange randomly with a num between 0-1
        if(randomNum() === 0){
            return exchangerateAPI
        }
        return frankfurterAPI
    } else if(exchangerateAPI < frankfurterAPI){
        return exchangerateAPI
    }
    return frankfurterAPI
}

const randomNum = () => {
    return Math.floor(Math.random() * 2) -1
}
module.exports = {checkBestRate}