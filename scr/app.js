    'use strict'

    const express = require('express');
    const bodyParser = require('body-parser');
    const dotenv = require('dotenv').config();
    const mongoose = require('mongoose');
    //const config = require('./config');

    const app = express();
    const router = express.Router();

    //Connecta ao banco
    //mongoose.connect(config.connectionString);

    // Carrega os Models cc

    // configura as views como ejs
    app.set('view engine', 'ejs');
    app.set('views', './scr/views');

    //carrega as rotas
    const indexRoute = require('./routes/index-route');
    const apiRoute = require('./routes/api-route');
    const categorieRoute = require('./routes/categorie-route');
    const itemRoute = require('./routes/item-route');
    const productRoute = require('./routes/product-route');
    const userRoute = require('./routes/user-route');
    const visitRoute = require('./routes/visit-route');
    const trendsRoute = require('./routes/trends-route');
    const highlightsRoute = require('./routes/highlights-route');

    app.use(bodyParser.json({
        limit: '1gb'
    }));
    app.use(bodyParser.urlencoded({ extended: false }));

    // Habilita o CORS
    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        next();
    });

    app.use('/', indexRoute);
    app.use('/api', apiRoute);
    app.use('/categories', categorieRoute);
    app.use('/items', itemRoute);
    app.use('/products', productRoute);
    app.use('/users', userRoute);
    app.use('/visits', visitRoute);
    app.use('/trends', trendsRoute);
    app.use('/highlights', highlightsRoute);

    module.exports = app;