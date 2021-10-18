const express = require('express');
const Products = require('./routes/Products');
const Sales = require('./routes/Sales');
const Home = require('./routes/Home');

const PORT = 3000;
const app = express();

app.listen(PORT, () => console.info(`Ligado na porta ${PORT}`));

app.use('/', Home);
app.use('/products', Products);
app.use('/sales', Sales);