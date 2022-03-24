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
            global.searchdata = [];
            global.searchdata = res.data;
        })
        .catch(function (error) {
            console.log(error);
            res.redirect('/login');
        });

    global.visitarray = [];

    for (var item in global.searchdata.results) {
        console.log(global.searchdata.results[item].id);
        var url = 'https://api.mercadolibre.com/visits/items?ids=';
        var id = global.searchdata.results[item].id;
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
                global.visitdata = [];
                global.visitdata = res.data;
                global.visitarray.push(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    console.log(global.visitarray);

    res.render('pages/item-search', { datasearch: global.searchdata, datavisits: global.visitarray });
    return;
};