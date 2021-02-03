const pool = require('./connection');

module.exports.getAll = async function () {
    try {
        let clientes = await pool.query('SELECT * FROM Cliente');
        return clientes;
    } catch (err) {
        console.log(err);
        return err;
    }
}

module.exports.create = async function (cliente) {
    try {
        let newCliente = await pool.query('INSERT INTO Cliente SET ?', cliente);
        return newCliente;
    }
    catch (err) {
        return err;
    }
}

module.exports.getByEmail = async function (email) {
    try {
        let cliente = await pool.query('SELECT * FROM cliente WHERE C_Email = ?', email);
        return cliente;
    }
    catch (err) {
        return err;
    }
}