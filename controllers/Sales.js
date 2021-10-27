// const { StatusCodes } = require('http-status-codes');
const Sales = require('../models/Sales');

async function getAll(req, res) {
  const result = await Sales.getAll();
  res.json({ sales: result });
}

async function create(req, res) {
  res.send(req.body);
}

module.exports = {
  getAll,
  create,
};