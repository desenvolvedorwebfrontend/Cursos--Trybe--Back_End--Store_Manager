const express = require('express');
const { StatusCodes } = require('http-status-codes');
const validateData = require('../validations/validateData');

const router = express.Router();

router.get('/', validateData, (req, res) => res.status(StatusCodes.OK).send('hello world'));

module.exports = router;