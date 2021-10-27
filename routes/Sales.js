const express = require('express');
const { StatusCodes } = require('http-status-codes');
const Sales = require('../controllers/Sales');
const validateSales = require('../validations/validateSales');

const router = express.Router();

router.get('/', Sales.getAll);
router.get('/:id', (req, res) => res.status(StatusCodes.OK).send(`hello world: ${req.params.id}`));
router.post('/', validateSales, Sales.create);
module.exports = router;