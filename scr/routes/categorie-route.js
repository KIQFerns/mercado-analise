'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/categorie-controller.js');


// pega o token e autentica
router.get('/', controller.getcategorie);

module.exports = router;