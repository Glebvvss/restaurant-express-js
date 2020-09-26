const successJsonMsgOf = data => JSON.stringify({
  success: 1,
  data:    data
})

const failedJsonMsgWith = text => JSON.stringify({
  success: 0,
  message: text
})

const emptySuccessJsonMsg = () => successJsonMsgOf(null)

module.exports = { successJsonMsgOf, failedJsonMsgWith, emptySuccessJsonMsg }