require('dotenv').config()
const { Sequelize } = require('sequelize')

const { dbConfig } = require('../utils/config')
const setupModels = require('../db/models')

const URI = dbConfig.dbUrl
console.log(URI)
const sequelizeConnection = new Sequelize(URI, {
  dialect: 'mysql',
  logging: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // <<<<<<< YOU NEED THIS
    }
  }
})

setupModels(sequelizeConnection)

module.exports = sequelizeConnection
