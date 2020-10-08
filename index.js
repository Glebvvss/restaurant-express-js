const app        = require('express')()
const cors       = require('cors')
const bodyParser = require('body-parser');
const middleware = require('./src/core/middlewares.js')
const routes     = require('./src/routes.js')
const port       = 4500

app.use(middleware.contentTypeJson)
app.use(bodyParser.json())
app.use(cors())
app.use('/', routes)
app.listen(port, () => console.log('[backend] I`m alive'))