/*
* framework express
* */
var express = require('express');
var expressValidator = require('express-validator');

/* consign */
var consign = require('consign');

/* bodyParser */
var bodyParser = require('body-parser');

/* iniciar o EXPRESS */
var app = express();

/* set 'view engine' e 'views' */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* configurar middlewares */
app.use(express.static('./app/public')); // express static
app.use(bodyParser.urlencoded({extended:true})); // formularios capturados via req.body
app.use(expressValidator()); // express validator

// Efetua autoload
consign()
    .include('./app/routes')
    .then('./app/models')
    .then('./app/controllers')
    .into(app); // consign

/* exportar app com todas as configurações */
module.exports = app;