'use strict';

const https = require('https');
var axios = require('axios');

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

    res.render('pages/trends-categorie', { datatrends: global.trendsdata });
    return;
};