'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/api-controller');

//envia dados sobre os sites para a página sites
router.get('/', controller.get);

//envia lista de categorias
router.get('/categories', controller.getcategorie);

// itens da categoria por busca
router.get('/:id/items', controller.getitems);

module.exports = router;