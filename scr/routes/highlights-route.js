'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/highlights-controller.js');

// pega mais vendidos da categoria por categoria
router.get('/:id/20mais', controller.getmais);

module.exports = router;