const { ObjectId } = require('mongodb');
const connection = require('./connection');

/** Busca todas vendas. */
async function getAll() {
  return connection()
    .then((db) => db.collection('sales').find().toArray())
    .then((product) => product);
}

async function create(listProducts) {
  return connection()
    .then((db) => db.collection('sales').insertOne({ itensSold: listProducts }))
    .then((productSold) => productSold.ops[0]);
}

async function getById(id) {
  if (!ObjectId.isValid(id)) return null;

  return connection()
    .then((db) => db.collection('products').findOne(new ObjectId(id)))
    .then((product) => product);
}

module.exports = {
  getAll,
  create,
  getById,
};