const { connect, migrate } = require('./src/core/db.js')

const connectedMigrate = migrate(connect)

const migrateAll = async () => {
  await connectedMigrate('0_schema')
  await connectedMigrate('0_seed')
}

migrateAll()