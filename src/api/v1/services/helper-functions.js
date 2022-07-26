const {apiArray} = require('./api-list')

const quoteErrors = {
    toCurrencyNotFound: 'The currency you wanted to convert to is missing on all exchanges'
}

const checkBestRate = (apiArray) => {
    try{
        checkIfNull(apiArray)
    } catch(error){
        throw error
    }
    if(apiArray[0].rate === apiArray[1].rate){
        //Picking an exchange randomly with a num between 0-1
        if(randomNum() === 0){
            return apiArray[0]
        }
        return apiArray[1]
    } else if(apiArray[0] < apiArray[1]){
        return apiArray[0]
    }
    return apiArray[1]
}
const checkIfNull = (apiArray) => {
    const allNull = apiArray.every(() => {
        apiArray.rate === null
    })
    if(allNull){
        throw new Error(quoteErrors.toCurrencyNotFound)
    }
    return
}

const randomNum = () => {
    return Math.floor(Math.random() * 2) -1
}

module.exports = {checkBestRate}
