const { successJsonMsgOf, failedJsonMsgWith } = require('../../core/messages.js');
const createReserveFrom                       = require('../../model/reserve/create.js');

const createdReserveId         = async data => (await createReserveFrom(data)).lastID
const createdReserveResponseBy = async data => ({ id: await createdReserveId(data) })

module.exports = async (request, response) => {
  try {
    response.send(
      successJsonMsgOf(
        await createdReserveResponseBy(request.body)
      )
    )
  } catch (error) {
    response.send(
      failedJsonMsgWith(error.message)
    )
  }
}