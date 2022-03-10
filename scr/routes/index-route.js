'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/index-controller');

//envia dados para a página de login
router.get('/login', controller.get);

// pega o token e autentica
router.get('/', controller.gettoken);

//direciona para página inicial ccm dados de sessão
router.get('/home', controller.getuser);

module.exports = router;