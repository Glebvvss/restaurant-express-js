const { successJsonMsgOf, failedJsonMsgWith } = require('../../core/messages.js');
const createReserveFrom                       = require('../../model/reserve/create.js');

const createdReserveResponseBy = async data => ({ id: (await createReserveFrom(data)).lastID })

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