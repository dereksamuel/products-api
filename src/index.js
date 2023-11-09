const { createRouter } = require('./router')
const { verifyPath } = require('./utils/verifyPathDotenv')
const { errorHandler, logErrors, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler')
require('dotenv').config({
  path: verifyPath()
})

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
createRouter(app)
app.use(logErrors)
app.use(ormErrorHandler)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log('listening on http://localhost:' + PORT)
})
