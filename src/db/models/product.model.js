const { Model, DataTypes, Sequelize } = require('sequelize')
const { CATEGORY_TABLE_NAME } = require('./category.model')

const PRODUCT_TABLE_NAME = 'products'

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  codigo: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING
  },
  precio_venta: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  precio_compra: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  categoriaId: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  unidad_de_medida: {
    allowNull: false,
    type: DataTypes.STRING
  },
  descripcion: {
    allowNull: false,
    type: DataTypes.STRING
  },
  fechaDeRegistro: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    field: 'fecha_de_registro'
  }
}

class Product extends Model {
  static associate (models) {
    // this.belongsTo(models.Category, {
    //   as: 'category'
    // })
  }

  static config (sequelizeConnection) {
    return {
      sequelize: sequelizeConnection,
      tableName: PRODUCT_TABLE_NAME,
      modelName: 'Product',
      timestamps: false
    }
  }
}

module.exports = {
  PRODUCT_TABLE_NAME,
  ProductSchema,
  Product
}
