const db = require("../config");
const { ErrorHandler } = require("../../helpers");
const all = async () => {
  const cars = await db("cars");
  return cars;
};
const findById = async id => {
  const car = await db("cars")
    .where({ id })
    .first();
  return car;
};
const create = async car => {
  try {
    const id = await db("cars").insert(car);
    const newCar = await findById(id[0]);
    return newCar;
  } catch (error) {
    throw new ErrorHandler(500, error.message);
  }
};

const update = async (id, car) => {
  try {
    const updated = await db("cars")
    .where({ id })
    .update(car);
    return updated
  } catch (error) {
    throw new ErrorHandler(500, error.message)
  }
};
module.exports = {
  all,
  create,
  findById,
  update
};
