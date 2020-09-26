module.exports = function(_, response, next) {
  response.setHeader('Content-Type', 'application/json')
  next()
}