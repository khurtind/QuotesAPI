const express = require('express')
const bodyParser = require('body-parser')
const v1Router = require('./api/v1/routes/quote_routes')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use('/', v1Router)

app.listen(port, () => {
    console.log(`The app is listening on port: ${port}`)
})