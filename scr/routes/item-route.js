'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/item-controller.js');

// pega atributos da categoria por categoria
router.get('/:id', controller.getitem);

module.exports = router;