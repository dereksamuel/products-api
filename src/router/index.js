const express = require('express')

const productsRouter = require('./products.router')
const categoriesRouter = require('./categories.router')

const createRouter = (app) => {
  const apiV1 = express.Router()
  apiV1.use('/categories', categoriesRouter)
  apiV1.use('/products', productsRouter)

  app.use('/api/v1', apiV1)
}

module.exports = {
  createRouter
}
