'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/user-controller.js');

// pega atributos da categoria por categoria
router.get('/:id', controller.getuser);

module.exports = router;