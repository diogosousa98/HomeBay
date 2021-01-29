const pool = require('./connection');

module.exports.getAll = async function() {
    try {
        let clientes = await pool.query('SELECT * FROM Cliente');
        return clientes;
    } catch(err) {
        console.log(err);
        return err;
    }
}

module.exports = pool