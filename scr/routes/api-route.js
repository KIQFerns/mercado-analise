'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/api-controller');

//envia dados sobre os sites para a página sites
router.get('/', controller.get);

//envia dados sobre asd categorias para a página sites
router.get('/', controller.getcategorie);

module.exports = router;