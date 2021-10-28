const express = require('express');
const Sales = require('../controllers/Sales');
const validateSales = require('../validations/validateSales');

const router = express.Router();

router.get('/', Sales.getAll);
router.get('/:id', Sales.getById);
router.post('/', validateSales, Sales.create);
router.put('/:id', validateSales, Sales.updateById);

module.exports = router;