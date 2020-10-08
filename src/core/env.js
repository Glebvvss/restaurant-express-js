const fs   = require('fs')
const path = require('path')

const { dbname }           = require('../config/db.js')
const { connect, migrate } = require('./db.js')

const connectedMigrate = migrate(connect)
const migrateAll = async () => {
  await connectedMigrate('0_schema')
  await connectedMigrate('0_seed')
}

const setup = async () => await migrateAll()

const down = () => {
  fs.unlinkSync(
    path.join(__dirname, `/../../${dbname}`)
  )
}

module.exports = { setup, down }