'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/visit-controller.js');

// pega visitas de um produto
router.get('/items/:id', controller.getitems);

module.exports = router;