class Category {
  constructor () {
    this.categories = [
      {
        codigo: '0001',
        nombre: 'Category 1'
      },
      {
        codigo: '0002',
        nombre: 'Category 1'
      }
    ]
  }

  getAll () {
    return this.categories
  }

  getByCode (codigo) {
    return this.categories.find((product) => product.codigo === codigo)
  }

  create (product) {
    this.categories.push(product)
    return this.categories
  }

  update (codigo, product) {
    const index = this.categories.findIndex((product) => product.codigo === codigo)
    this.categories[index] = product
    return this.categories
  }

  delete (codigo) {
    const index = this.categories.findIndex((product) => product.codigo === codigo)
    this.categories.splice(index, 1)
    return this.categories
  }
}

module.exports = {
  Category
}
