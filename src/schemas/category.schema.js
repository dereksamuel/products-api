const Joi = require('joi')

const codigo = Joi.string().uuid()
const nombre = Joi.string().max(50).min(0)

const createCategorySchema = Joi.object({
  nombre: nombre.required()
})

const updateCategorySchema = Joi.object({
  nombre
})

const getCategorySchema = Joi.object({
  codigo: codigo.required()
})

module.exports = {
  createCategorySchema,
  updateCategorySchema,
  getCategorySchema
}
