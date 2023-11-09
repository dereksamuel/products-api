const Service = require('./index.services')

class Category extends Service {
  constructor () {
    super('Category')
  }
}

module.exports = {
  Category
}
