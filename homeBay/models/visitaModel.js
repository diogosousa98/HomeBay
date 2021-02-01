const pool = require('./connection');

module.exports.getAllImoveis = async function () {
    try {
        let imoveis = await pool.query('SELECT * FROM Visita');
        return imoveis;
    } catch (err) {
        return err
    }
}

module.exports.create = async function (visita) {
    try {
        let newVisita = await pool.query('INSERT INTO Visita SET ?', visita);
        return newVisita;
    }
    catch (err) {
        return err;
    }
}