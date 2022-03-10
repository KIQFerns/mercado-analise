'use strict';

const https = require('https');
var axios = require('axios');

// conteudo /atributos de categorias
exports.getproduct = async (req, res, next) => {
    var bearer = 'Bearer ';
    var token = global.access_token;
    console.log(bearer + token);

    var url = 'https://api.mercadolibre.com/products/';
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
            global.productdata = [];
            global.productdata = res.data;
        })
        .catch(function (error) {
            console.log(error);
        });

    res.render('pages/product-attribute', { dataproduct: global.productdata });
    return;
};