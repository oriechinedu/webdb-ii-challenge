const express = require('express')
const { handleError } = require('./helpers')
const { getAllCars, createNewCar, updateCar } = require('./controllers/car')
const { validateCarInput } = require('./middleware')
const app = express()

app.use(express.json())

app.get('/', (req, res, next) => {
  return res.status(200).json('Welcome')
})

app.get('/cars', getAllCars)
app.post('/cars', validateCarInput, createNewCar)
app.put('/cars/:id', validateCarInput, updateCar)

app.use((err, req, res, next) => {
  handleError(err, res);
});

module.exports = app