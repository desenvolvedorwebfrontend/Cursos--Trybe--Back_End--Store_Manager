const express = require('express');
const Sales = require('../controllers/Sales');
const validateSales = require('../validations/validateSales');

const router = express.Router();

router.get('/', Sales.getAll);
router.post('/', validateSales, Sales.create);

module.exports = router;