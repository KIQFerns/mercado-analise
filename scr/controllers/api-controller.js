'use strict';


const https = require('https');
var axios = require('axios');

// conteudo /sites
exports.get = async (req, res, next) => {
  var bearer = 'Bearer ';
  var token = global.access_token;
  console.log(bearer + token);

  var axios = require('axios');

  var config = {
    method: 'get',
    url: 'https://api.mercadolibre.com/sites',
    headers: {
      'Authorization': bearer + token
    }
  };

  await axios(config)
    .then(function (res) {
      console.log(JSON.stringify(res.data));
      global.sitedata = [];
      global.sitedata = res.data;
    })
    .catch(function (error) {
      console.log(error);
      res.redirect('/login');
    });
  
    res.render('pages/api', {data: global.sitedata } );  
    return; 
};

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

  await axios(config)
      .then(function (res) {
          console.log(JSON.stringify(res.data));
          global.data = [];
          global.data = res.data;
      })
      .catch(function (error) {
          console.log(error);
          res.redirect('/login');
      });

  res.render('pages/categorie', { data: global.data });
  return;
};

// conteudo /items de categorias
exports.getitems = async (req, res, next) => {
  var bearer = 'Bearer ';
  var token = global.access_token;
  console.log(bearer + token);

  var url = 'https://api.mercadolibre.com/sites/MLB/search?category=';
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
          global.itemsdata = [];
          global.itemsdata = res.data;
      })
      .catch(function (error) {
          console.log(error);
          res.redirect('/login');
      });
  
  global.visitarray = [];

  for (var item in global.itemsdata.results) {
    console.log(global.itemsdata.results[item].id);
    var url = 'https://api.mercadolibre.com/visits/items?ids=';
    var id = global.itemsdata.results[item].id;
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
  JSON.stringify(global.visitarray);
  JSON.stringify(global.itemsdata);
  
  res.render('pages/items-categorie', { dataitems: global.itemsdata , datavisits: global.visitarray });
  return;
};