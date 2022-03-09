'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/visit-controller.js');

// pega visitas de um produto
router.getitems('/items/:id', controller.getuser);

module.exports = router;