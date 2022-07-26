const {Api} = require('../classes/api')

const apiNames = ['Frankfurter', 'Exchangerate']

const frankfurterAPI = new Api('Frankfurter', 'https://api.frankfurter.app/latest?from=')
const exchangerateAPI = new Api('Exchangerate', 'https://api.exchangerate-api.com/v4/latest/')

apiArray = [
    frankfurterAPI,
    exchangerateAPI
]

module.exports = {apiArray, apiNames}