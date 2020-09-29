const isCorrectClientName  = clientName => clientName.match(/^[a-z A-Z]{2,}$/) === -1
const isCorrectDate        = date       => date.match(/^20[0-9]{2}\-[0-9]{2}\-[0-9]{2}$/) === -1
const isCorrectTableNumber = number     => number.match(/^\d+$/) === -1

const isCorrectReserve = reserve => {
  if (! isCorrectClientName(reserve.client_name)) {
    return true
  }

  if (! isCorrectDate(reserve.date)) {
    return true
  }

  if (! isCorrectTableNumber(reserve.table_number)) {
    return true
  }

  return false
}

module.exports = { isCorrectReserve, isCorrectClientName, isCorrectDate, isCorrectTableNumber }