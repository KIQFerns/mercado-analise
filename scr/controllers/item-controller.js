'use strict';

const https = require('https');
var axios = require('axios');

// conteudo /items de categorias
exports.getitem = async (req, res, next) => {
    var bearer = 'Bearer ';
    var token = global.access_token;
    console.log(bearer + token);

    var url = 'https://api.mercadolibre.com/items/';
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

    res.render('pages/item-attribute', { dataitem: global.itemdata });
    return;
};

// post /busca de itens
exports.postbusca = async (req, res, next) => {
    var bearer = 'Bearer ';
    var token = global.access_token;
    console.log(bearer + token);

    var url = 'https://api.mercadolibre.com/sites/MLB/search?q=';
    var search = req.body.search;
    global.search = req.body.search; 
    console.log(url + search);

    var axios = require('axios');

    var config = {
        method: 'get',
        url: url + search,
        headers: {
            'Authorization': bearer + token
        }
    };

    await axios(config)
        .then(function (res) {
            console.log(JSON.stringify(res.data));
            global.itemdata = [];
            global.searchdata = res.data;
        })
        .catch(function (error) {
            console.log(error);
            res.redirect('/login');
        });

        global.visitarray = [];

        for (var item in global.searchdata.results) {
            console.log(global.searchdata.results[item].id);
            var url = 'https://api.mercadolibre.com/visits/items?ids=';
            var id = global.searchdata.results[item].id;
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

        global.sellerarray = [];

        for (var item in global.searchdata.results) {
            console.log(global.searchdata.results[item].seller.id);
            var url = 'https://api.mercadolibre.com/users/';
            var id = global.searchdata.results[item].seller.id;
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
                    global.sellerdata = [];
                    global.sellerdata = res.data;
                    global.sellerarray.push(res.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        global.positionarray = [];

        for (var item in global.searchdata.results) {
            console.log(global.searchdata.results[item].seller.id);
            var url = 'https://api.mercadolibre.com/highlights/MLB/item/';
            var id = global.searchdata.results[item].id;
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
                    global.positiondata = [];
                    global.positiondata = res.data;
                    global.positionarray.push(res.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        //console.log(global.sellerarray);
        //console.log(global.visitarray);
        console.log(global.positionarray);
    
        res.render('pages/item-search', { datasearch: global.searchdata, datavisits: global.visitarray, dataseller: global.sellerarray, dataposition: global.positionarray });
        return;
};

// post /busca de itens por período
exports.postbuscaperiodo = async (req, res, next) => {
    var bearer = 'Bearer ';
    var token = global.access_token;
    console.log(bearer + token);

    var url = 'https://api.mercadolibre.com/sites/MLB/search?q=';
    var search = global.search;
    console.log(url + search);

    var config = {
        method: 'get',
        url: url + search,
        headers: {
            'Authorization': bearer + token
        }
    };

    await axios(config)
        .then(function (res) {
            console.log(JSON.stringify(res.data));
            global.itemdata = [];
            global.searchdata = res.data;
        })
        .catch(function (error) {
            console.log(error);
            res.redirect('/login');
        });

        global.visitarray = [];

        for (var item in global.searchdata.results) {
            console.log(global.searchdata.results[item].id);
            var url = 'https://api.mercadolibre.com/visits/items?ids=';
            var id = global.searchdata.results[item].id;
            console.log(url + id);
    
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
                    global.visitarray.push(res.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        global.periodarray = [];

        for (var item in global.searchdata.results) {
            console.log(global.searchdata.results[item].id);
            var url = 'https://api.mercadolibre.com/items/visits?ids=';
            var period = '&date_from=';
            var xcut = '&date_to=';
            var ycut = '&attributes=total_visits';
            var id = global.searchdata.results[item].id;
            console.log(url + id + period + start + xcut + end + ycut);
            var start = req.body.start;
            var end = req.body.end; 
    
            var config = {
                method: 'get',
                url: url + id + period + start + xcut + end + ycut,
                headers: {
                    'Authorization': bearer + token
                }
            };
    
            await axios(config)
                .then(function (res) {
                    console.log(res.data[0]);
                    console.log(JSON.stringify(res.data[0]));
                    global.periodarray.push(res.data[0]);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        console.log(global.visitarray);
        console.log(global.periodarray);
    
        res.render('pages/item-search-period', { datasearch: global.searchdata, datavisits: global.visitarray, dataperiod: global.periodarray });
        return;
};

// conteudo /busca de itens
exports.getbusca = async (req, res, next) => {
    var bearer = 'Bearer ';
    var token = global.access_token;
    console.log(bearer + token);

    var url = 'https://api.mercadolibre.com/sites/MLB/search?q=';
    var search = req.params.search;
    console.log(url + search);

    var axios = require('axios');

    var config = {
        method: 'get',
        url: url + search,
        headers: {
            'Authorization': bearer + token
        }
    };

    await axios(config)
        .then(function (res) {
            console.log(JSON.stringify(res.data));
            global.searchdata = [];
            global.searchdata = res.data;
        })
        .catch(function (error) {
            console.log(error);
            res.redirect('/login');
        });

    global.visitarray = [];

    for (var item in global.searchdata.results) {
        console.log(global.searchdata.results[item].id);
        var url = 'https://api.mercadolibre.com/visits/items?ids=';
        var id = global.searchdata.results[item].id;
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

    for (var item in global.searchdata.results) {
        console.log(global.searchdata.results[item].seller.id);
        var url = 'https://api.mercadolibre.com/users/';
        var id = global.searchdata.results[item].seller.id;
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
                global.sellerdata = [];
                global.sellerdata = res.data;
                global.sellerarray.push(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    console.log(global.sellerarray);

    res.render('pages/item-search', { datasearch: global.searchdata, datavisits: global.visitarray, dataseller: global.sellerarray });
    return;
};