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
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  (req, res, next) => {
    try {
      const { id } = req.params
      const product = productService.getById(id)
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
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  (req, res, next) => {
    try {
      const { id } = req.params
      const product = req.body

      const products = productService.update(id, product)
      res.status(200).json(products)
    } catch (error) {
      next(error)
    }
  })

router.delete(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  (req, res, next) => {
    try {
      const { id } = req.params

      const products = productService.delete(id)
      res.status(200).json(products)
    } catch (error) {
      next(error)
    }
  })

module.exports = router
