const { createRouter } = require('./router')
const { verifyPath } = require('./utils/verifyPathDotenv')
require('dotenv').config({
  path: verifyPath()
})

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
createRouter(app)

app.listen(PORT, () => {
  console.log('listening on http://localhost:' + PORT)
})
