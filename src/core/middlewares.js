const contentTypeJson = (_, response, next) => {
  response.setHeader('Content-Type', 'application/json')
  next()
}

module.exports = { contentTypeJson }