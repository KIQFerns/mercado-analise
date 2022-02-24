'use strict';

const https = require('https');
var axios = require('axios');

exports.gettoken = async (req, res, next) => {
  var code = req.query.code

  var data = JSON.stringify({
    "grant_type": "authorization_code",
    "client_id": process.env.CLIENT_ID,
    "client_secret": process.env.CLIENT_SECRET,
    "code": req.query.code,
    "redirect_uri": process.env.REDIRECT_URI
  });

  var config = {
    method: 'post',
    url: 'https://api.mercadolibre.com/oauth/token',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  axios(config)
    .then(function (res) {
      console.log(JSON.stringify(res.data));

      global.user_id = res.data.user_id;
      global.access_token = res.data.access_token;

      console.log(res.data.access_token);

      return next();

    })
    .catch(function (error) {
      console.log(error);
      res.render('login', {
        title: "API MeLi - análise de Mercado",
        version: "0.0.2",
        CLIENT_ID: process.env.CLIENT_ID,
        REDIRECT_URI: process.env.REDIRECT_URI
      });
    });
};

exports.getuser = async (req, res, next) => {
  var bearer = 'Bearer ';
  var token = global.access_token;
  console.log(bearer + token);

  var axios = require('axios');

  var config = {
    method: 'get',
    url: 'https://api.mercadolibre.com/users/me',
    headers: {
      'Authorization': bearer + token
    }
  };

  axios(config)
    .then(function (res) {
      var data = JSON.stringify(res.data);
      console.log(JSON.stringify(res.data));

      global.first_name = res.data.first_name;
      global.last_name = res.data.last_name;
    })
    .catch(function (error) {
      console.log(error);
    });
    
    res.render('pages/index');

    //res.render('index', {
    //  user_id: global.user_id,
    //  first_name: global.first_name,
    //  last_name: global.last_name
    //});   
};