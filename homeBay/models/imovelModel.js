const pool = require('./connection');

module.exports.getAllImoveis = async function() {
    try {
        let imoveis = await pool.query('SELECT * FROM Imovel');
        return imoveis;
    } catch(err) {
        return err
    }
}
