const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')
const crypto = require('crypto')

class Service {
  constructor (label) {
    this.label = label
    this.include = null
  }

  async getAll () {
    const data = await models[this.label].findAll({
      include: this.include,
      limit: 100
    })
    return data
  }

  async getById (thingId) {
    const thing = await models[this.label].findByPk(thingId)
    if (!thing) throw boom.notFound('Id: ' + thingId + ' Not found')

    return thing.dataValues
  }

  async update (thingId, thingData) {
    const thing = await this.getById(thingId)
    await thing.update(thingData)

    return thing
  }

  async create (thing) {
    const newThing = {
      ...thing,
      codigo: crypto.randomUUID()
    }

    await models[this.label].create(newThing)

    return { status: 'created' }
  }

  async delete (thingId) {
    const thing = await this.getById(thingId)
    await thing.destroy()

    return thing
  }
}

module.exports = Service
