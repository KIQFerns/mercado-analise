'use strict';


const https = require('https');
var axios = require('axios');

// conteudo /categorias
exports.getcategorie = async (req, res, next) => {
    var bearer = 'Bearer ';
    var token = global.access_token;
    console.log(bearer + token);
  
    var axios = require('axios');
  
    var config = {
      method: 'get',
      url: 'https://api.mercadolibre.com/sites/MLB/categories',
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
    
      res.render('pages/categorie', {categoriedata: global.categoriedata } );  
  };