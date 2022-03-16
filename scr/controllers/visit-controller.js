'use strict';

const https = require('https');
var axios = require('axios');

// conteudo /atributos de categorias
exports.getitems = async (req, res, next) => {
    var bearer = 'Bearer ';
    var token = global.access_token;
    console.log(bearer + token);

    var url = 'https://api.mercadolibre.com/visits/items?ids=';
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

    res.render('pages/visit-item', { dataitem: global.itemdata });
    return;
};