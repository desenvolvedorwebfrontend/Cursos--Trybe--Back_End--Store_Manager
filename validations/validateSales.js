const { StatusCodes } = require('http-status-codes');
const sendStatusError = require('./sendStatusError');

const MESSAGE_ERROR1 = 'Wrong product ID or invalid quantity';

function sales(req, res) {
  // const errQuantity = req.body.includes({ quantity: 0 }); //ok
  const errQuantity = req.body.filter((ele) => ele.quantity <= 0);

  if ((errQuantity !== [])) {
    sendStatusError(StatusCodes.UNPROCESSABLE_ENTITY, MESSAGE_ERROR1, res);
  } res.status(StatusCodes.UNPROCESSABLE_ENTITY).send(req.body);
}

module.exports = sales;