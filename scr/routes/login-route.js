'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/login-controller');

//envia dados para a página de login
router.get('/', controller.get);

module.exports = router;