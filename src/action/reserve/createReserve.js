const { connect } = require('../../core/db.js')
const { successJsonMsgOf, failedJsonMsgWith } = require('../../core/messages.js');

const incorrectReserveFormat = reserve => {
  if (!reserve.client_name) {
    return true
  }

  if (!reserve.date || reserve.date.match(/^20[0-9]{2}\-[0-9]{2}\-[0-9]{2}$/) === -1) {
    return true
  }

  if (!reserve.table_number) {
    return true
  }

  return false
}

const reserveAlreadyExists = async reserve => {
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

const tableNotExists = async tableNumber => {
  const { table_number } = await (await connect()).get(
    `SELECT table_number
      FROM tables 
      WHERE table_number=?`, 
    [
      tableNumber
    ]
  )
  return !table_number
}

const createReserve = async reserve => {
  if (incorrectReserveFormat(reserve)) {
    throw new Error('Incorrect format reserve data')
  }

  if (await reserveAlreadyExists(reserve)) {
    throw new Error('Table already reserved at the date')
  }

  if (await tableNotExists(reserve.table_number)) {
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

const createdReserveId               = async data => (await createReserve(data)).lastID
const createdReserveIdContentBasedOn = async data => ({ id: await createdReserveId(data) })

module.exports = async (request, response) => {
  try {
    response.send(
      successJsonMsgOf(
        await createdReserveIdContentBasedOn(request.body)
      )
    )
  } catch (error) {
    response.send(
      failedJsonMsgWith(error.message)
    )
  }
}