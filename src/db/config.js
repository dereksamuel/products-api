require('dotenv').config()
const { dbConfig } = require('../utils/config')

let URI = ''

URI = dbConfig.dbUrl

module.exports = {
  development: {
    dialect: 'mysql',
    url: URI,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // <<<<<<< YOU NEED THIS
      }
    }
  },
  production: {
    dialect: 'mysql',
    url: URI,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // <<<<<<< YOU NEED THIS
      }
    }
  }
}
