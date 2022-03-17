'use strict';

const https = require('https');
var axios = require('axios');

// conteudo /posição
exports.getmais = async (req, res, next) => {
    var bearer = 'Bearer ';
    var token = global.access_token;
    console.log(bearer + token);

    var url = 'https://api.mercadolibre.com/highlights/MLB/category/';
    var id = req.params.id;
    console.log(url + id);

    var axios = require('axios');

    var config = {
        method: 'get',
        url: url + id,
        headers: {
            'Authorization': bearer + token
        }
    };

    await axios(config)
        .then(function (res) {
            console.log(JSON.stringify(res.data));
            global.maisdata = [];
            global.maisdata = res.data;
        })
        .catch(function (error) {
            console.log(error);
            res.redirect('/login');
        });

    res.render('pages/highlights-categorie', { datamais: global.maisdata });
    return;
};

// conteudo items/mais vendidos de categorias
exports.getmaisitem = async (req, res, next) => {
    var bearer = 'Bearer ';
    var token = global.access_token;
    console.log(bearer + token);

    var url = 'https://api.mercadolibre.com/highlights/MLB/item/';
    var id = req.params.id;
    console.log(url + id);

    var axios = require('axios');

    var config = {
        method: 'get',
        url: url + id,
        headers: {
            'Authorization': bearer + token
        }
    };

    await axios(config)
        .then(function (res) {
            console.log(JSON.stringify(res.data));
            global.maisdata = [];
            global.maisdata = res.data;
        })
        .catch(function (error) {
            console.log(error);
            res.redirect('/login');
        });

    res.render('pages/highlights-item', { datamaisitem: global.maisdata });
    return;
};

// conteudo products/ posição
exports.getmaisproduct = async (req, res, next) => {
    var bearer = 'Bearer ';
    var token = global.access_token;
    console.log(bearer + token);

    var url = 'https://api.mercadolibre.com/highlights/MLB/product/';
    var id = req.params.id;
    console.log(url + id);

    var axios = require('axios');

    var config = {
        method: 'get',
        url: url + id,
        headers: {
            'Authorization': bearer + token
        }
    };

    await axios(config)
        .then(function (res) {
            console.log(JSON.stringify(res.data));
            global.maisdata = [];
            global.maisdata = res.data;
        })
        .catch(function (error) {
            console.log(error);
            res.redirect('/login');
        });

    res.render('pages/highlights-product', { datamaisproduct: global.maisdata });
    return;
};