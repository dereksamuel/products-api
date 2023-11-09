const Joi = require('joi')

const precio = Joi.number().min(0)
const categoria = Joi.string().uuid()
const codigo = Joi.string().uuid()
const unidadDeMedida = Joi.string()
const descripcion = Joi.string().max(150).min(0)
const nombre = Joi.string().max(50).min(0)

const createProductSchema = Joi.object({
  nombre: nombre.required(),
  precio_venta: precio.required(),
  precio_compra: precio.required(),
  categoria: categoria.required(),
  unidad_de_medida: unidadDeMedida,
  descripcion
})

const updateProductSchema = Joi.object({
  nombre,
  precio_venta: precio,
  precio_compra: precio,
  categoria,
  unidad_de_medida: unidadDeMedida,
  descripcion
})

const getProductSchema = Joi.object({
  codigo: codigo.required()
})

module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema
}
