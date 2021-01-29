var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var imovelRoute = require('./routes/imovelRoute');
var clienteRoute = require('./routes/clienteRoute');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/API/imoveis', imovelRoute);
app.use('/API/clientes', clienteRoute);

module.exports = app;
