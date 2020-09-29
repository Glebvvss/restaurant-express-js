const { connect } = require('../../core/db.js')

const reserveExists = async reserve => {
  const { countTableReserved } = await (await connect()).get(
    `SELECT COUNT(*) as countTableReserved 
      FROM reserves 
      WHERE date=? 
        AND table_number=?`, 
    [
      reserve.date, 
      reserve.table_number
    ]
  )
  return Number(countTableReserved) > 0
}

module.exports = { reserveExists }