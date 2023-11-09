const express = require('express')

const { Category } = require('../services/categories.services')
const validatorHandler = require('../middlewares/validator.handler')
const { getCategorySchema, createCategorySchema } = require('../schemas/category.schema')

const router = express.Router()
const categoryService = new Category()

router.get('/', async (req, res, next) => {
  try {
    const categories = await categoryService.getAll()
    res.status(200).json(categories)
  } catch (error) {
    next(error)
  }
})

router.get(
  '/:codigo',
  validatorHandler(getCategorySchema, 'params'),
  (req, res, next) => {
    try {
      const { codigo } = req.params
      const category = categoryService.getByCode(codigo)
      res.status(200).json(category)
    } catch (error) {
      next(error)
    }
  })

router.post(
  '/',
  validatorHandler(createCategorySchema, 'body'),
  (req, res, next) => {
    try {
      const category = req.body
      const categories = categoryService.create(category)
      res.status(201).json(categories)
    } catch (error) {
      next(error)
    }
  })

router.patch(
  '/:codigo',
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(createCategorySchema, 'body'),
  (req, res, next) => {
    try {
      const { codigo } = req.params
      const category = req.body

      const categories = categoryService.update(codigo, category)
      res.status(200).json(categories)
    } catch (error) {
      next(error)
    }
  })

router.delete(
  '/:codigo',
  validatorHandler(getCategorySchema, 'params'),
  (req, res, next) => {
    try {
      const { codigo } = req.params

      const categories = categoryService.delete(codigo)
      res.status(200).json(categories)
    } catch (error) {
      next(error)
    }
  })

module.exports = router
