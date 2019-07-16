const express = require('express')
const { handleError } = require('./helpers')
const { getAllCars, createNewCar } = require('./controllers/car')

const app = express()

app.use(express.json())

app.get('/', (req, res, next) => {
  return res.status(200).json('Welcome')
})

app.get('/cars', getAllCars)
app.post('/cars', createNewCar)

app.use((err, req, res, next) => {
  handleError(err, res);
});

module.exports = app