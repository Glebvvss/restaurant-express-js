const { connect }          = require('../../core/db.js')
const { successJsonMsgOf } = require('../../core/messages.js');

const reserveCollection = async () => await (await connect()).all(`SELECT * FROM reserves`)

module.exports = async (_, response) => {
  response.send(
    successJsonMsgOf(
      await reserveCollection()
    )
  )
}