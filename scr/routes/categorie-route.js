'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/categorie-controller.js');


// pega a lista de categorias
router.get('/', controller.getcategorie);

// pega atributos da categoria por categoria
router.get('/:id', controller.getattribute);

module.exports = router;