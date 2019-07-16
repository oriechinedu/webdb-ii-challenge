const db = require('../config')
const { ErrorHandler } = require('../../helpers')
const all = async () => {
  const cars = await db('cars');
  return cars;
}

const create = async (car) => {
  try {
    const newCar = await db('cars').insert(car)
    return newCar
  } catch (error) {
   throw new ErrorHandler(500, error.message)
  }
}

module.exports = {
  all,
  create,
}