// modules required for the project
var express = require('express');

// define routers
let index = require('./routes/index'); // top level routes

let app = express();

// view engine setup
app.set('view engine', 'ejs');

// route redirects
app.use('/', index);

module.exports = app;
