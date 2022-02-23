'use strict';

//Renderiza a primeira página e envia dados do env para iniciar o fluxo de autenticação  
exports.get = async(req, res, next) => {
    res.render('login', {
        title: "APP MeLi - análise de Mercado e concorrência",
        version: "0.0.2",
        CLIENT_ID: process.env.CLIENT_ID,
        REDIRECT_URI: process.env.REDIRECT_URI
    });
};