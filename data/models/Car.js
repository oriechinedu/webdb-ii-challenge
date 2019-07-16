const db = require('../config')

const all = async () => {
  const cars = await db('cars');
  return cars;
}