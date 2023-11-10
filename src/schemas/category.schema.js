const Joi = require('joi')

const id = Joi.string()
const nombre = Joi.string().max(50).min(0)

const createCategorySchema = Joi.object({
  nombre: nombre.required()
})

const updateCategorySchema = Joi.object({
  nombre
})

const getCategorySchema = Joi.object({
  id: id.required()
})

module.exports = {
  createCategorySchema,
  updateCategorySchema,
  getCategorySchema
}
