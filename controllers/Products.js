const { StatusCodes } = require('http-status-codes');

const Products = require('../models/Products');

async function getAll(req, res) {
  const result = await Products.getAll();
  res.json({ products: result });
}

async function getById(req, res) {
  const { id } = req.params;

  const result = await Products.getById(id);

  if (!result) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).send({
      err: {
        code: 'invalid_data',
        message: 'Wrong id format',
      },
    });
  }

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

async function update(req, res) {
  const { id } = req.params;
  const { name, quantity } = req.body;
  const result = await Products.updateById({ id, name, quantity })
    .then(() => ({ id, name, quantity }));

  res.send(result);
}

async function deleteById(req, res) {
  const { id } = req.params;

  const result = await Products.deleteById(id)
    .then((ele) => (ele));

  if (!result) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).send({
      err: {
        code: 'invalid_data',
        message: 'Wrong id format',
      },
    });
  }

  res.json(result);
}

module.exports = { getAll, getById, create, update, deleteById };