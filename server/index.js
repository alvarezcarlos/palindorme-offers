require('dotenv').config()
const dbConnection = require('./dbConnection')

  dbConnection
  .once('open', () => {
    server = require('./app/app')
  })