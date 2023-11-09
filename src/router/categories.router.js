const express = require('express')

const { Product } = require('../services/products.services')

const router = express.Router()
const productService = new Product()

router.get('/', async (req, res, next) => {
  try {
    const products = await productService.getAll()
    res.status(200).json(products)
  } catch (error) {
    next(error)
  }
})

router.get('/:codigo', (req, res) => {

})

module.exports = router
