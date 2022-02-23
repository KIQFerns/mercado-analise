'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/index-controller');


// pega o token e autentica
router.get('/', controller.gettoken);

//direciona para página inicial ccm dados de sessão
router.get('/', controller.getuser);

module.exports = router;