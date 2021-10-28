const { StatusCodes } = require('http-status-codes');
const Sales = require('../models/Sales');

async function getAll(req, res) {
  const result = await Sales.getAll();
  res.json({ sales: result });
}

async function create(req, res) {
  const listProducts = [];

  req.body.map(({ productId, quantity }) =>
    listProducts.push({ productId, quantity }));

  console.log(listProducts);
  const result = await Sales.create(listProducts);
  res.status(StatusCodes.OK).send(result);
}

module.exports = {
  getAll,
  create,
};