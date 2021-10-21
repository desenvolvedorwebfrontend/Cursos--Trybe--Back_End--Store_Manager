const { StatusCodes } = require('http-status-codes');

const Products = require('../models/Products');

async function getAll(req, res) {
  const result = await Products.getAll();
  res.send(result);
}

async function getById(req, res) {
  const { id } = req.params;

  const result = await Products.getById(id);

  res.json(result);
}

async function create(req, res) {
  const { name, quantity } = req.body;
  const findName = await Products.findByName(name);
  const result = await Products.create(name, quantity);

  if (findName) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).send(
      { 
        err: {
          code: 'invalid_data',
          message: 'Product already exists',
        },
      },
    );
  } res.status(StatusCodes.CREATED).send(result);
}

module.exports = { getAll, getById, create };