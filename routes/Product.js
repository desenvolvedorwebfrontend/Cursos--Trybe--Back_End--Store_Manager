const express = require('express');

const app = express();
app.put('/', (req, res) => {
  res.status(200).send('PUT');
});

const Product = (req, res) => res.status(200).send('Product OK');

module.exports = Product;
