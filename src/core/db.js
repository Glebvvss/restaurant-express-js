const sqlite   = require('sqlite-async')
const dbConfig = require('../config/db.js')

const connect = async () => await sqlite.open(dbConfig.dbname);

module.exports = { connect }