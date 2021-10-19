const Products = require('../models/Products');

async function getAll(req, res) {
  const result = await Products.getAll();
  res.send(result);
}

module.exports = { getAll };