require('dotenv').config()
const { dbConfig } = require('../utils/config')

let URI = ''

URI = dbConfig.dbUrl

module.exports = {
  development: {
    dialect: 'mysql',
    url: URI
  },
  production: {
    dialect: 'mysql',
    url: URI
  }
}
