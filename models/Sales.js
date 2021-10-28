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
    .then((db) => db.collection('sales').findOne(new ObjectId(id)))
    .then((product) => product);
}

async function updateById({ id, productId, quantity }) {
  console.log(id);
  return connection()
  .then((db) => db.collection('sales').updateOne(
    { _id: ObjectId(id) },
    { $set: {
      itensSold: [productId, quantity],
      },
    },
   ));  
}

module.exports = {
  getAll,
  create,
  getById,
  updateById,
};