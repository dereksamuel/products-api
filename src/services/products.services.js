class Product {
  constructor () {
    this.products = [
      {
        codigo: '0001',
        nombre: 'Producto 1',
        descripcion: 'sdsdfsdf',
        precio_venta: 100,
        precio_compra: 50,
        created: '10/25/32',
        cantidad_de_inventario: 10,
        categoria: '45081',
        unidad_de_medida: 'kg'
      },
      {
        codigo: '0002',
        nombre: 'Producto 1',
        descripcion: 'sdsdfsdf',
        precio_venta: 100,
        precio_compra: 50,
        created: '10/25/32',
        cantidad_de_inventario: 10,
        categoria: '45081',
        unidad_de_medida: 'kg'
      }
    ]
  }

  getAll () {
    return this.products
  }

  getByCode (codigo) {
    return this.products.find((product) => product.codigo === codigo)
  }

  create (product) {
    this.products.push(product)
    return this.products
  }

  update (codigo, product) {
    const index = this.products.findIndex((product) => product.codigo === codigo)
    this.products[index] = product
    return this.products
  }

  delete (codigo) {
    const index = this.products.findIndex((product) => product.codigo === codigo)
    this.products.splice(index, 1)
    return this.products
  }
}

module.exports = {
  Product
}
