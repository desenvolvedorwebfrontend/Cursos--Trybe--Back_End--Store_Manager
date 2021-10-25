const express = require('express');
const validateData = require('../validations/validateData');
const Products = require('../controllers/Products');

const router = express.Router();

router.get('/', Products.getAll);
router.get('/:id', Products.getById);
router.put('/:id', validateData, Products.update);
router.post('/', validateData, Products.create);
router.delete('/:id', Products.deleteById);

module.exports = router;