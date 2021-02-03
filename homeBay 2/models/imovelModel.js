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

module.exports.update = async function (imovel) {
    try {
        let result = await pool.query('UPDATE Imovel SET IM_nome = ?, IM_area = ?, IM_tipologia = ?, IM_preco = ?, IM_M_rua = ?, IM_M_numero = ?, IM_M_localidade = ?, IM_M_cpostal3 = ?, IM_M_cpostal4 = ?, IM_descricao = ? WHERE IM_id = ? ', [imovel.IM_nome, imovel.IM_area, imovel.IM_tipologia, imovel.IM_preco, imovel.IM_M_rua, imovel.IM_M_numero, imovel.IM_M_localidade, imovel.IM_M_cpostal3, imovel.IM_M_cpostal4, imovel.IM_descricao, imovel.IM_id]);
        return result;
    }
    catch (err) {
        return err;
    }
}

module.exports.getById = async function (id) {
    try {
        let result = await pool.query('SELECT * FROM Imovel WHERE IM_id', id);
        return result[0];
    }
    catch (err) {
        return err;
    }
}