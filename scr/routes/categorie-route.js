'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/categorie-controller.js');


// pega atributos da categoria por categoria
router.get('/:id', controller.getattribute);


// pega mais vendidos da categoria por categoria
router.get('/:id/20mais', controller.getmais);

// pega mais vendidos da categoria por categoria
router.get('/:id/trends', controller.gettrends);

module.exports = router;