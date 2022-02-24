'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/api-controller');

//envia dados sobre usuário para a página de login
router.get('/', controller.get);

module.exports = router;