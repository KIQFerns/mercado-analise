'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller.js');

// pega atributos da categoria por categoria
router.get('/:id', controller.getproduct);

module.exports = router;