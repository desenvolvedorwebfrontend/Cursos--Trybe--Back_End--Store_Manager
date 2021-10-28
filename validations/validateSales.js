const { StatusCodes } = require('http-status-codes');
const sendStatusError = require('./sendStatusError');

const MESSAGE_ERROR1 = 'Wrong product ID or invalid quantity';

function sales(req, res, next) {
  const errQuantity = req.body.some((ele) => ele.quantity <= 0);
  const errTypeString = req.body.some((ele) => (typeof (ele.quantity) === 'string'));

  if (!(errQuantity && errTypeString)) {
    return sendStatusError(StatusCodes.UNPROCESSABLE_ENTITY, MESSAGE_ERROR1, res);
  } next();
}

module.exports = sales;
