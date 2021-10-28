const { StatusCodes } = require('http-status-codes');
const Sales = require('../models/Sales');

async function getAll(req, res) {
  const result = await Sales.getAll();
  res.json({ sales: result });
}

async function create(req, res) {
  const listProducts = [];

  req.body.map(({ productId, quantity }) => listProducts.push({ productId, quantity }));

  const result = await Sales.create(listProducts);
  res.status(StatusCodes.OK).send(result);
}

async function getById(req, res) {
  const { id } = req.params;

  const result = await Sales.getById(id);

  if (!result) {
    return res.status(StatusCodes.NOT_FOUND).send({
      err: {
        code: 'not_found',
        message: 'Sale not found',
      },
    });
  }

  res.json(result);
}

async function updateById(req, res) {
  const { id } = req.params;
  const { productId, quantity } = req.body[0];
  const result = await Sales.updateById({ id, productId, quantity })
  .then(() => ({ _id: id, itensSold: [{ productId, quantity }] }));

  res.send(result);
}

module.exports = {
  getAll,
  create,
  getById,
  updateById,
};