const app        = require('express')()
const cors       = require('cors')
const bodyParser = require('body-parser');
const headers    = require('./src/core/middleware/headers.js')
const routes     = require('./src/routes.js')
const port       = 4500

app.use(headers)
app.use(bodyParser.json())
app.use(cors())
app.use('/', routes)
app.listen(port, () => console.log('[backend] I`m alive'))