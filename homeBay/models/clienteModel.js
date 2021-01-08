const pool = require('./connection');

module.exports.getAll = async function() {
    try {
        let sql = 'SELECT * FROM Cliente';
        let clientes = await pool.query(sql);
        return {status:200, data: clientes};
    } catch(err) {
        console.log(err);
        return {status:500, data: err};
    }
}