const { Model, DataTypes, Sequelize } = require('sequelize')

const CATEGORY_TABLE_NAME = 'categories'

const CategorySchema = {
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
  fechaDeRegistro: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    field: 'fecha_de_registro'
  }
}

class Category extends Model {
  static associate (models) {
    // this.hasMany(models.ChannelsUser, {
    //   as: 'channels_users',
    //   foreignKey: {
    //     name: 'userId'
    //   }
    // })
    // this.hasMany(models.Product, {
    //   as: 'products',
    //   foreignKey: {
    //     name: 'categoriaId'
    //   }
    // })
  }

  static config (sequelizeConnection) {
    return {
      sequelize: sequelizeConnection,
      tableName: CATEGORY_TABLE_NAME,
      modelName: 'Category',
      timestamps: false
    }
  }
}

module.exports = {
  CATEGORY_TABLE_NAME,
  CategorySchema,
  Category
}
