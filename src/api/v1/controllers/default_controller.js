const {httpStatusCodes} = require('../errors/http_errors')

const defaultHandler = (req, res) => {
    res.send('HTTP Error 404 – Not Found')
}

module.exports = {defaultHandler}