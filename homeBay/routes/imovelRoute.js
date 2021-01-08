var express = require('express');
var router = express.Router();
const Imovel = require('../models/imovelModel');

/* GET all. */
router.get('/', async function(req, res, next) {
  let filterObj = req.query;
  let result = await Imovel.getAll(filterObj);
  res.status(result.status).
     send(result.data);
});

module.exports = router;