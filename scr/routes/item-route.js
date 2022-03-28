'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/item-controller.js');

// pega atributos de itens
router.get('/:id', controller.getitem);

// pega atributos de itens
router.get('/busca/:search', controller.getbusca);

// pega atributos de itens por busca
router.post('/busca', controller.postbusca);

// pega atributos de itens por busca com periodo de clicks
router.post('/buscaperiodo', controller.postbuscaperiodo);

module.exports = router;