const express = require('express')

const { Product } = require('../services/products.services')
const validatorHandler = require('../middlewares/validator.handler')
const { getProductSchema, createProductSchema, updateProductSchema } = require('../schemas/product.schema')

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

router.get(
  '/:codigo',
  validatorHandler(getProductSchema, 'params'),
  (req, res, next) => {
    try {
      const { codigo } = req.params
      const product = productService.getByCode(codigo)
      res.status(200).json(product)
    } catch (error) {
      next(error)
    }
  })

router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  (req, res, next) => {
    try {
      const product = req.body
      const products = productService.create(product)
      res.status(201).json(products)
    } catch (error) {
      next(error)
    }
  })

router.patch(
  '/:codigo',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  (req, res, next) => {
    try {
      const { codigo } = req.params
      const product = req.body

      const products = productService.update(codigo, product)
      res.status(200).json(products)
    } catch (error) {
      next(error)
    }
  })

router.delete(
  '/:codigo',
  validatorHandler(getProductSchema, 'params'),
  (req, res, next) => {
    try {
      const { codigo } = req.params

      const products = productService.delete(codigo)
      res.status(200).json(products)
    } catch (error) {
      next(error)
    }
  })

module.exports = router
