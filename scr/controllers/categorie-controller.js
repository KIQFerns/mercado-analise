'use strict';

const https = require('https');
var axios = require('axios');

// conteudo /atributos de categorias
exports.getattribute = async (req, res) => {
    var bearer = 'Bearer ';
    var token = global.access_token;
    console.log(bearer + token);

    var url = 'https://api.mercadolibre.com/categories/';
    var id = req.params.id;
    console.log(url + id);

    var config = {
        method: 'get',
        url: url + id,
        headers: {
            'Authorization': bearer + token
        }
    };

    await axios(config)
        .then(function (result) {
            console.log(JSON.stringify(result.data));
            global.categoriedata = [];
            global.categoriedata = result.data;
        })
        .catch(function (error) {
            console.log(error);
            res.redirect('/login');
        });
    res.render('pages/categorie-attribute', { datacategorie: global.categoriedata });
};