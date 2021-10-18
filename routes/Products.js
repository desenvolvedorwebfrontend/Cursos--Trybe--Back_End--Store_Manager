const express = require('express');
const { StatusCodes } = require('http-status-codes');

const router = express.Router();

router.get('/', (req, res) => res.status(StatusCodes.OK).send('caiu aqui - Product OK'));

module.exports = router;