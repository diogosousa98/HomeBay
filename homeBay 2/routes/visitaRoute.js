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

router.get('/', async function (req, res, next) {
    try {
        let visitas = await mVisita.getAllVisitas();
        res.send(visitas);
    }
    catch (err) {
        res.send(err);
    }
});

router.get('/historico', async function (req, res, next) {
    let imovel = await mVisita.getAllVisitasInnerJoin();
    res.send(imovel);
});

router.get('/historico/:imovel', async function (req, res, next) {
    im_id = req.params.imovel;
    let imovel = await mVisita.getAllVisitasInnerJoinPorImovel(im_id);
    res.send(imovel);
});

module.exports = router;