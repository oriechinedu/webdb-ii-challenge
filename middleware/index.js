
const { ErrorHandler } = require('../helpers')

const validateCarInput = (req, res, next) => {
  const { vin, make, model, mileage } = req.body
  if (!vin || !make || !model || !mileage) {
    throw new ErrorHandler(400, 'Missing car information that is required')
  } else {
    next()
  }
}

module.exports = {
  validateCarInput
}