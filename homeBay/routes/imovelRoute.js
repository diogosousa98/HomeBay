var express = require('express');
var router = express.Router();
const mImovel = require('../models/imovelModel');
const mCliente = require('../models/clienteModel');

/* GET all. */
router.get('/', async function (req, res, next) {
  let imovel = await mImovel.getAllImoveis();
  res.send(imovel);
});

router.get('/:imovel', async function (req, res, next) {
  let imovel = await mImovel.getById(req.params.imovel);
  res.send(imovel);
});

router.post('/', async function (req, res, next) {
  let imovel = await mImovel.create(req.body);
  console.log(imovel);
  res.send(imovel);
});

router.put('/', async function (req, res, next) {
  let imovel = await mImovel.update(req.body);
  console.log(imovel);
  res.send(imovel);
});

module.exports = router;