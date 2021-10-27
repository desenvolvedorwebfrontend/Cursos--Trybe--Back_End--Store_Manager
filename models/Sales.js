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

module.exports = {
  getAll,
};