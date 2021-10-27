const express = require('express');
const validateProduct = require('../validations/validateProduct');
const Products = require('../controllers/Products');

const router = express.Router();

router.get('/', Products.getAll);
router.get('/:id', Products.getById);
router.delete('/:id', Products.deleteById);
router.put('/:id', validateProduct, Products.update);
router.post('/', validateProduct, Products.create);

module.exports = router;