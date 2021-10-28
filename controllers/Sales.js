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

async function deleteById(req, res) {
  const { id } = req.params;
  const result = await Sales.getById(id);
  const deleted = await Sales.deleteById(id);
    // .then(({ productId, quantity }) => ({ _id: id, itensSold: [{ productId, quantity }] }));

  if (!result) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).send({
      err: {
        code: 'invalid_data',
        message: 'Wrong sale ID format',
      },
    });
  } res.status(200).send(deleted);
}

module.exports = {
  getAll,
  create,
  getById,
  updateById,
  deleteById,
};