var express = require('express');
var router = express.Router();
const mImovel = require('../models/imovelModel');

/* GET all. */
router.get('/', async function(req, res, next) {
  let imovel = await mImovel.getAllImoveis();
  res.send(imovel);
});

module.exports = router;