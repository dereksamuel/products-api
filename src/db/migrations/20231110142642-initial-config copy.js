'use strict'

const { CATEGORY_TABLE_NAME, CategorySchema } = require('../models/category.model')
const { PRODUCT_TABLE_NAME, ProductSchema } = require('../models/product.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(PRODUCT_TABLE_NAME, ProductSchema)
    await queryInterface.createTable(CATEGORY_TABLE_NAME, CategorySchema)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable(PRODUCT_TABLE_NAME)
    await queryInterface.dropTable(CATEGORY_TABLE_NAME)
  }
}
