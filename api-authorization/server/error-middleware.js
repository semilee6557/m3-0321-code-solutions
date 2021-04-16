const { JsonWebTokenError } = require('jsonwebtoken');
const ClientError = require('./client-error');

function errorMiddleware(err, req, res, next) {
  if (err instanceof ClientError) {
    res.status(err.status).json({
      error: err.message
    });
  } else if (err instanceof JsonWebTokenError) {
    throw new ClientError(401, 'invalid access token');
  } else {
    console.error(err);
    throw new ClientError(500, 'an unexpected error occurred');
  }
}

module.exports = errorMiddleware;
