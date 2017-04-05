// modules required for the project
var express = require('express');
var request = require('request');
var cheerio = require('cheerio');

// define routers
let index = require('./routes/index'); // top level routes

let app = express();

// enable cross-origin resource sharing
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// route redirects
app.use('/', index);

module.exports = app;
