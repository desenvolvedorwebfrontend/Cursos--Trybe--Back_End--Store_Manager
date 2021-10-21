const express = require('express');
const validateData = require('../validations/validateData');
const Products = require('../controllers/Products');

const router = express.Router();

router.get('/', Products.getAll);
router.get('/:id', Products.getById);
router.put('/:id', validateData, (req, res) => res.send(req.params.id));
router.post('/', validateData, Products.create);

module.exports = router;