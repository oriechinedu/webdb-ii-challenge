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

module.exports = {
  getAllCars
}