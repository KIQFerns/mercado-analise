'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/api-controller');

//envia dados sobre usuário para a página sites
router.get('/', controller.get);

module.exports = router;