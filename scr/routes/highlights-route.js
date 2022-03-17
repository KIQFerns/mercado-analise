'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/highlights-controller.js');

// pega mais vendidos da categoria por categoria
router.get('/:id', controller.getmais);

// pega posição do item
router.get('/item/:id', controller.getmaisitem);

// pega posição do produto
router.get('/product/:id', controller.getmaisproduct);

module.exports = router;