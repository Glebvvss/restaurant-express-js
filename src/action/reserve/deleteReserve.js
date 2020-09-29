const { connect }             = require('../../core/db')
const { emptySuccessJsonMsg } = require('../../core/messages')

const deleteReserve = async id => await (await connect()).run(`DELETE FROM reserves WHERE id=?`, [Number(id)])

module.exports = async (request, response) => {
  await deleteReserve(request.params.id)
  response.send(
    emptySuccessJsonMsg()
  )
}