const { connect }          = require('../../core/db.js')
const { successJsonMsgOf } = require('../../core/messages.js');

const tableCollection = async () => await (await connect()).all(`SELECT * FROM tables`)

module.exports =  async (_, response) => {
  response.send(
    successJsonMsgOf(
      await tableCollection()
    )
  )
}