// modules required for the project
var express = require('express');
var request = require('request');
var cheerio = require('cheerio');

// define routers
let index = require('./routes/index'); // top level routes

let app = express();

// view engine setup

// route redirects
app.use('/', index);

module.exports = app;
