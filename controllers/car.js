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
    if (!car) {
      throw new ErrorHandler(500, 'Could not save the car in the database')
    }
    return res.status(201).json({ status: 'OK', car })
  } catch (error) {
    next(error)
  }
}

const updateCar = async (req, res, next) => {
  try {
    const updated = await Car.update(req.params.id, req.body);
    console.log(updated);
    if (!updated) {
      throw new ErrorHandler(500, 'The Car with the specified ID could not be updated')
    }
    return res.status(200).json({
      message: 'Car with the specified ID has been updated'
    })
  } catch (error) {
    next(error)
  }
}

const deleteCar = async (req, res, next) => {
  try {
    const deleted = await Car.remove(req.params.id)
    if (!deleted) {
      throw new ErrorHandler(404, 'The car with the specified ID does not exist')
    }
    return res.status(200).json({
      message: 'The car with the specified ID has been deleted'
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAllCars,
  createNewCar,
  updateCar,
  deleteCar
}