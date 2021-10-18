const express = require('express');
const Author = require('../sd-011-store-manager/models/Author');
const { PORT } = require('./statusCode');
const { Product, Sales } = require('../sd-011-store-manager/routes');

const app = express();

app.listen(PORT, () => console.info('Ligado na porta %s', PORT));

app.get('/', (_request, response) => response.send());
app.get('/products', Product);
app.get('/sales', Sales);
app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});