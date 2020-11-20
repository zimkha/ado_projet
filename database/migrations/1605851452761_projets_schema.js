'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjetsSchema extends Schema {
  up () {
    this.create('projets', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('projets')
  }
}

module.exports = ProjetsSchema
