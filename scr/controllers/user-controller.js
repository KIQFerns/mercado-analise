'use strict';

const https = require('https');
var axios = require('axios');

// conteudo /atributos de categorias
exports.getuser = async (req, res, next) => {
    var bearer = 'Bearer ';
    var token = global.access_token;
    console.log(bearer + token);

    var url = 'https://api.mercadolibre.com/users/';
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
            global.userdata = [];
            global.userdata = res.data;
        })
        .catch(function (error) {
            console.log(error);
        });

    res.render('pages/user-attribute', { datauser: global.userdata });
    return;
};