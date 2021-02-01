var express = require('express');
var router = express.Router();
const mCliente = require('../models/clienteModel');
const mVisita = require('../models/visitaModel');


router.post('/', async function (req, res, next) {
    try {

        let cliente = await mCliente.getByEmail(req.body.cliente.C_email);
        let vis = req.body.visita;
        if (cliente.length == 0) {
            cliente = await mCliente.create(req.body.cliente);
            vis.C_ID = cliente.insertId;
        }
        else
            vis.C_ID = cliente[0].C_id;
        visita = await mVisita.create(vis);
        res.send(visita);
    }
    catch (err) {
        res.send(err);
    }
});

module.exports = router;