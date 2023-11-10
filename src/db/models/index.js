const { Category, CategorySchema } = require('./category.model')
const { Product, ProductSchema } = require('./product.model')

function setupModels (sequelizeConnection) {
  Product.init(ProductSchema, Product.config(sequelizeConnection))
  Category.init(CategorySchema, Category.config(sequelizeConnection))
  // Channel.init(ChannelSchema, Channel.config(sequelizeConnection))
  // ChannelsUser.init(ChannelsUserSchema, ChannelsUser.config(sequelizeConnection))
  // Message.init(MessageSchema, Message.config(sequelizeConnection))

  // User.associate(sequelizeConnection.models)
  // Channel.associate(sequelizeConnection.models)
  // ChannelsUser.associate(sequelizeConnection.models)
  Product.associate(sequelizeConnection.models)
  Category.associate(sequelizeConnection.models)
}

module.exports = setupModels
