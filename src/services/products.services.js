const Service = require('./index.services')

class Product extends Service {
  constructor () {
    super('Product')
  }
}

module.exports = {
  Product
}
