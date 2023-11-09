const { Model, DataTypes, Sequelize } = require('sequelize')
const { CATEGORY_TABLE_NAME } = require('./category.model')

const PRODUCT_TABLE_NAME = 'products'

const ProductSchema = {
  codigo: {
    allowNull: false,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    type: DataTypes.UUID
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING
  },
  precio_venta: {
    allowNull: false,
    type: DataTypes.NUMBER
  },
  precio_compra: {
    allowNull: false,
    type: DataTypes.NUMBER
  },
  categoria: {
    field: 'categoria',
    references: {
      model: CATEGORY_TABLE_NAME,
      key: 'codigo'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    allowNull: false,
    type: DataTypes.UUID
  },
  unidad_de_medida: {
    allowNull: true,
    type: DataTypes.STRING
  },
  descripcion: {
    allowNull: true,
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
    // this.hasMany(models.ChannelsUser, {
    //   as: 'channels_users',
    //   foreignKey: {
    //     name: 'userId'
    //   }
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
