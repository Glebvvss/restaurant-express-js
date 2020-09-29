const sqlite   = require('sqlite-async')
const dbConfig = require('../config/db.js')

const connect = async () => await sqlite.open(dbConfig.dbname);

const migrate = connect => name => require(`../migrations/${name}.js`)(connect)

module.exports = { connect, migrate }