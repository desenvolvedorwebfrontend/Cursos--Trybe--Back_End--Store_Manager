const express = require('express');
const { StatusCodes } = require('http-status-codes');
const Author = require('./models/Author');
const { PORT } = require('./statusCode');
const { Product, Sales } = require('./routes');

const app = express();

app.listen(PORT, () => console.info('Ligado na porta %s', PORT));

app.get('/', (_request, response) => response.send());
app.get('/products', Product);
app.get('/sales', Sales);
app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(StatusCodes.OK).json(authors);
});