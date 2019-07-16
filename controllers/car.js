const { ErrorHandler } = require('../helpers')
const Car = require('../data/models/Car')

const getAllCars = async (req, res, next) => {
  try {
    const cars = await Car.all();
    return res.status(200).json({
      status: 'OK',
      cars
    })
  } catch (error) {
    next(error)
  }
}
const createNewCar = async (req, res, next) => {
  try {
    const car = await Car.create(req.body);
    return res.status(201).json({ status: 'OK', car})
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAllCars,
  createNewCar
}