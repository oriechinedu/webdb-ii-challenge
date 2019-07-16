const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res, next) => {
  return res.status(200).json('Welcome')
})

module.exports = app