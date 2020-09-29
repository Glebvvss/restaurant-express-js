const { connect }             = require('../../core/db.js')
const { isCorrectReserve }    = require('./constraints.js')
const { reserveExists }       = require('./find.js')
const { tableByNumberExists } = require('../table/find.js')

const isNoCorrectReserve = reserve => ! isCorrectReserve(reserve)

const tableNoExists      = async tableNumber => ! tableByNumberExists(tableNumber)

module.exports = async reserve => {
  if (isNoCorrectReserve(reserve)) {
    throw new Error('Incorrect format reserve data')
  }

  if (await reserveExists(reserve)) {
    throw new Error('Table already reserved at the date')
  }

  if (await tableNoExists(reserve.table_number)) {
    throw new Error('Incorrect table number')
  }

  return await (await connect()).run(
    `INSERT INTO reserves (table_number, date, client_name)VALUES(?, ?, ?)`, 
    [
      reserve.table_number, 
      reserve.date, 
      reserve.client_name
    ]
  )
}