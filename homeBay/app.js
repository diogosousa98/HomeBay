var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');


var imovelRoute = require('./routes/imovelRoute');
var clienteRoute = require('./routes/clienteRoute');
var visitaRoute = require('./routes/visitaRoute');
var administradorRoute = require('./routes/administradorRoute');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/API/imoveis', imovelRoute);
app.use('/API/clientes', clienteRoute);
app.use('//visitas', visitaRoute);
app.use('/API/administradores', administradorRoute);

module.exports = app;
