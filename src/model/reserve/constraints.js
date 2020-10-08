const isCorrectClientName  = clientName => Boolean(String(clientName).match(/^[a-z A-Z]{2,}$/))
const isCorrectDate        = date       => Boolean(String(date).match(/^20[0-9]{2}\-[0-9]{2}\-[0-9]{2}$/))
const isCorrectTableNumber = number     => Boolean(String(number).match(/^\d+$/))

const isCorrectReserve = reserve => {
  if (! isCorrectClientName(reserve.client_name)) {
    return false
  }

  if (! isCorrectDate(reserve.date)) {
    return false
  }

  if (! isCorrectTableNumber(reserve.table_number)) {
    return false
  }

  return true
}

module.exports = { isCorrectReserve, isCorrectClientName, isCorrectDate, isCorrectTableNumber }