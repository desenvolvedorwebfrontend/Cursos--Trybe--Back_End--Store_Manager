const express = require('express');
const { StatusCodes } = require('http-status-codes');
const validateData = require('../validations/validateData');
// const Products = require('../models/Products');

const router = express.Router();

router.get('/', validateData);

router.post('/', validateData, (req, res) => {
  // const { name, quantity } = req.body;

  res.status(StatusCodes.CREATED).send({ message: 'Criado com sucesso' });
});

module.exports = router;