var express = require('express');
var router = express.Router();
const mImovel = require('../models/imovelModel');
const mCliente = require('../models/clienteModel');

/* GET all. */
router.get('/', async function (req, res, next) {
  let imovel = await mImovel.getAllImoveis();
  res.send(imovel);
});

router.post('/', async function (req, res, next) {
  let imovel = req.body.imovel;
  let cliente = req.body.cliente;

  mCliente.create(cliente);
  mImovel.create(imovel);
});

module.exports = router;