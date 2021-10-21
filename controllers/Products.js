const { StatusCodes } = require('http-status-codes');

const Products = require('../models/Products');

async function getAll(req, res) {
  // const test = [];
  const result = await Products.getAll();
  // const resultObject = Object.assign({}, ...result);
  // const resultReduce = result.reduce((obj, cur) => ({ ...obj, [cur]: cur }), {});
  // const entries = Object.fromEntries(result);
  // result.map((item) => test.push(item));

  res.json(
    {
      products: result,
    },
  );
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

module.exports = { getAll, getById, create };