// const { ObjectId } = require('mongodb');
const connection = require('./connection');

/** Busca todas vendas. */
async function getAll() {
  return connection()
    .then((db) => db.collection('sales').find().toArray())
    .then((product) => product.map(({ _id, name, quantity }) => (
      {
        _id,
        itensSold: [{
          productId: name,
          quantity,
        }],
      })));
}

async function create(listProducts) {
  return connection()
    .then((db) => db.collection('sales').insertOne({ itensSold: listProducts }))
    .then((productSold) => productSold.ops[0]);
}

module.exports = {
  getAll,
  create,
};