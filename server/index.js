require('dotenv').config()
const dbConnection = require('./dbConnection')
const start = require('./app/app')

dbConnection
.once('open', () => {
  start()
})