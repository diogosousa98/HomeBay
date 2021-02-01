const pool = require('./connection');

module.exports.getAllImoveis = async function () {
    try {
        let imoveis = await pool.query('SELECT * FROM Imovel');
        return imoveis;
    } catch (err) {
        return err
    }
}

module.exports.create = async function (imovel) {
    try {
        let newImovel = await pool.query('INSERT INTO Imovel SET ?', imovel);
        return newImovel;
    }
    catch (err) {
        return err;
    }
}