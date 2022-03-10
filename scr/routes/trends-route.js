'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/trends-controller.js');

// pega mais vendidos da categoria por categoria
router.get('/:id/trends', controller.gettrends);

module.exports = router;