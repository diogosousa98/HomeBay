var express = require('express');
var router = express.Router();
const mAdmins = require('../models/administradorModel');

/* GET all. */
router.get('/login/:admin', async function (req, res, next) {
    let admin = req.params.admin;
    let existe = await mAdmins.getByNome(admin);
    if (existe.length != 0) res.send(true);
    else res.send(false);
});

module.exports = router;