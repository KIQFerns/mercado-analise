'use strict';

const https = require('https');
var axios = require('axios');

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

    res.render('pages/highlights-categorie', { datamais: global.maisdata });
    return;
};