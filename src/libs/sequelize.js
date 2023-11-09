require('dotenv').config()
const { Sequelize } = require('sequelize')

const { dbConfig } = require('../utils/config')
const setupModels = require('../db/models')

const URI = dbConfig.dbUrl
const sequelizeConnection = new Sequelize(URI, {
  dialect: 'mysql',
  logging: true
})

setupModels(sequelizeConnection)

module.exports = sequelizeConnection
