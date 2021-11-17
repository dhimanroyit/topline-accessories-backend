const BadRequest = require('../utils/error/BadRequest');
const GeneralError = require('../utils/error/GeneralError');
const NotFound = require('../utils/error/NotFound');
const Unauthorized = require('../utils/error/Unauthorized');

const errorHandler = (err, req, res, next) => {
  let code = 500;
  if (err instanceof BadRequest) {
    code = err.getStatusCode();
  } else if (err instanceof GeneralError) {
    code = err.getStatusCode();
  } else if (err instanceof Unauthorized) {
    code = err.getStatusCode();
  } else if (err instanceof NotFound) {
    code = err.getStatusCode();
  }

  res
    .status(code)
    .json({
      statusCode: code,
      error: true,
      message: err.message,
    })
    .end();
};

module.exports = errorHandler;
