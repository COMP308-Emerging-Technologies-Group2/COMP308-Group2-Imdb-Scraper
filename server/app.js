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

// Handle 404 Errors
  app.use(function(req, res) {
      res.status(400);
     res.render('errors/404',{
      title: '404: File Not Found'
    });
  });

  // Handle 500 Errors
  app.use(function(error, req, res, next) {
      res.status(500);
      res.render('errors/500', {
        title:'500: Internal Server Error',
        error: error
      });
  });

module.exports = app;
