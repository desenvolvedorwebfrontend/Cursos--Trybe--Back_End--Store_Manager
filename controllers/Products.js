// const { StatusCodes } = require('http-status-codes');

const Products = require('../models/Products');

async function getAll(req, res) {
  const result = await Products.getAll();
  res.send(result);
}

async function create(req, res) {
  const { name, quantity } = req.body;
  const result = await Products.create(name, quantity);
  res.status(201).send(result);
}

module.exports = { getAll, create };