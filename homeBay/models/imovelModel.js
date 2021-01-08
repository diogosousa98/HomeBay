const pool = require('./connection');

module.exports.getAll = async function() {
    try {
        let sql = 'SELECT * FROM Imovel';
        let imoveis = await pool.query(sql);
        return {status:200, data: imoveis};
    } catch(err) {
        console.log(err);
        return {status:500, data: err};
    }
}