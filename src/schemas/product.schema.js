const Joi = require('joi')

const precio = Joi.number().min(0)
const categoriaId = Joi.number()
const id = Joi.string()
const unidadDeMedida = Joi.string()
const descripcion = Joi.string().max(150).min(0)
const nombre = Joi.string().max(50).min(0)

const createProductSchema = Joi.object({
  nombre: nombre.required(),
  precio_venta: precio.required(),
  precio_compra: precio.required(),
  categoria_id: categoriaId.required(),
  unidad_de_medida: unidadDeMedida,
  descripcion
})

const updateProductSchema = Joi.object({
  nombre,
  precio_venta: precio,
  precio_compra: precio,
  categoria_id: categoriaId,
  unidad_de_medida: unidadDeMedida,
  descripcion
})

const getProductSchema = Joi.object({
  id: id.required()
})

module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema
}
