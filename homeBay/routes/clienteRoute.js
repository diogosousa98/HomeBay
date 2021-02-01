var express = require('express');
var router = express.Router();
const Cliente = require('../models/clienteModel');

/* GET all. */
router.get('/', async function (req, res, next) {
  let filterObj = req.query;
  let result = await Cliente.getAll(filterObj);
  res.status(result.status).
    send(result.data);
});

module.exports = router;