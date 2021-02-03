const pool = require('./connection');

module.exports.getByNome = async function (nome) {
    try {
        let admin = await pool.query('SELECT * FROM Administradores WHERE AD_Nome = ?', nome);
        return admin;
    }
    catch (err) {
        return err;
    }
}