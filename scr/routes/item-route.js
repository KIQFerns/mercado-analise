'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/item-controller.js');

// pega atributos de itens
router.get('/:id', controller.getitem);

// pega atributos de itens
router.get('/busca/:search', controller.getbusca);

module.exports = router;