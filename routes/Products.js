const express = require('express');
const validateData = require('../validations/validateData');
const Products = require('../controllers/Products');

const router = express.Router();

router.get('/', Products.getAll);

router.post('/', validateData, Products.create);

module.exports = router;