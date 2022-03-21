'use strict';

const https = require('https');
var axios = require('axios');

// conteudo /items de categorias
exports.getitem = async (req, res, next) => {
    var bearer = 'Bearer ';
    var token = global.access_token;
    console.log(bearer + token);

    var url = 'https://api.mercadolibre.com/items/';
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
            global.itemdata = [];
            global.itemdata = res.data;
        })
        .catch(function (error) {
            console.log(error);
            res.redirect('/login');
        });

    res.render('pages/item-attribute', { dataitem: global.itemdata });
    return;
};

// post /busca de itens
exports.postbusca = async (req, res, next) => {
    var bearer = 'Bearer ';
    var token = global.access_token;
    console.log(bearer + token);

    var url = 'https://api.mercadolibre.com/sites/MLB/search?q=';
    var search = req.body.search;
    console.log(url + search);

    var axios = require('axios');

    var config = {
        method: 'get',
        url: url + search,
        headers: {
            'Authorization': bearer + token
        }
    };

    await axios(config)
        .then(function (res) {
            //console.log(JSON.stringify(res.data));
            global.itemdata = [];
            global.searchdata = res.data;
        })
        .catch(function (error) {
            console.log(error);
            res.redirect('/login');
        });

    res.render('pages/item-search', { datasearch: global.searchdata });
    return;
};

// conteudo /busca de itens
exports.getbusca = async (req, res, next) => {
    var bearer = 'Bearer ';
    var token = global.access_token;
    console.log(bearer + token);

    var url = 'https://api.mercadolibre.com/sites/MLB/search?q=';
    var search = req.params.search;
    console.log(url + search);

    var axios = require('axios');

    var config = {
        method: 'get',
        url: url + search,
        headers: {
            'Authorization': bearer + token
        }
    };

    await axios(config)
        .then(function (res) {
            console.log(JSON.stringify(res.data));
            global.itemdata = [];
            global.searchdata = res.data;
        })
        .catch(function (error) {
            console.log(error);
            res.redirect('/login');
        });

    res.render('pages/item-search', { datasearch: global.searchdata });
    return;
};