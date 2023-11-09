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

router.get('/:codigo', (req, res, next) => {
  try {
    const { codigo } = req.params
    const product = productService.getByCode(codigo)
    res.status(200).json(product)
  } catch (error) {
    next(error)
  }
})

router.post('/', (req, res, next) => {
  try {
    const product = req.body
    const products = productService.create(product)
    res.status(201).json(products)
  } catch (error) {
    next(error)
  }
})

router.put('/:codigo', (req, res, next) => {
  try {
    const { codigo } = req.params
    const product = req.body

    const products = productService.update(codigo, product)
    res.status(200).json(products)
  } catch (error) {
    next(error)
  }
})

router.delete('/:codigo', (req, res, next) => {
  try {
    const { codigo } = req.params

    const products = productService.delete(codigo)
    res.status(200).json(products)
  } catch (error) {
    next(error)
  }
})

module.exports = router
