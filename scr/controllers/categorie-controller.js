'use strict';

const https = require('https');
var axios = require('axios');

// conteudo /atributos de categorias
exports.getattribute = (req, res, next) => {
    var bearer = 'Bearer ';
    var token = global.access_token;
    console.log(bearer + token);

    var url = 'https://api.mercadolibre.com/categories/';
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

    axios(config)
        .then(function (res) {
            console.log(JSON.stringify(res.data));
            global.categoriedata = [];
            global.categoriedata = res.data;
        })
        .catch(function (error) {
            console.log(error);
        });

    res.render('pages/categorie-attribute', { datacategorie: global.categoriedata });
    return;
};

// conteudo /items de categorias
exports.getitems = (req, res, next) => {
    var bearer = 'Bearer ';
    var token = global.access_token;
    console.log(bearer + token);

    var url = 'https://api.mercadolibre.com/sites/MLB/search?limit=10000&category=';
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

    axios(config)
        .then(function (res) {
            console.log(JSON.stringify(res.data));
            global.itemsdata = [];
            global.itemsdata = res.data;
        })
        .catch(function (error) {
            console.log(error);
        });

    res.render('pages/categorie-items', { dataitems: global.itemsdata });
    return;
};

// conteudo /mais vendidos de categorias
exports.getmais = (req, res, next) => {
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

    axios(config)
        .then(function (res) {
            console.log(JSON.stringify(res.data));
            global.maisdata = [];
            global.maisdata = res.data;
        })
        .catch(function (error) {
            console.log(error);
        });

    res.render('pages/categorie-20mais', { datamais: global.maisdata });
    return;
};

// conteudo /termos mais buscados de categorias
exports.gettrends = (req, res, next) => {
    var bearer = 'Bearer ';
    var token = global.access_token;
    console.log(bearer + token);

    var url = 'https://api.mercadolibre.com/trends/MLB/';
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

    axios(config)
        .then(function (res) {
            console.log(JSON.stringify(res.data));
            global.trendsdata = [];
            global.trendsdata = res.data;
        })
        .catch(function (error) {
            console.log(error);
        });

    res.render('pages/categorie-trends', { datatrends: global.trendsdata });
    return;
};