const pool = require('./connection');

module.exports.getAllVisitas = async function () {
    try {
        let imoveis = await pool.query('SELECT * FROM Visita');
        return imoveis;
    } catch (err) {
        return err
    }
}

module.exports.getAllVisitasInnerJoin = async function () {
    try {
        let imoveis = await pool.query('SELECT V.V_Data, V.V_Hora, C.C_nome, I.IM_nome FROM Visita AS V INNER JOIN Cliente AS C ON C.C_id = V.C_id INNER JOIN Imovel AS I ON I.IM_id = V.IM_id ORDER BY V.V_Data desc');
        return imoveis;
    } catch (err) {
        return err
    }
}

module.exports.getAllVisitasInnerJoinPorImovel = async function (id) {
    try {
        let imoveis = await pool.query('SELECT V.V_Data, V.V_Hora, C.C_nome, I.IM_nome FROM Visita AS V INNER JOIN Cliente AS C ON C.C_id = V.C_id INNER JOIN Imovel AS I ON I.IM_id = V.IM_id WHERE I.IM_id = ?', id);
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


module.exports.getAllVisitasInnerJoinPorImovelPorData = async function (V_data) {
    try {
        let imoveis = await pool.query('SELECT * FROM Visita as v inner join Imovel as i on v.IM_id = i.IM_id where v.V_Data = ?', V_data);
        return imoveis;
    } catch (err) {
        return err
    }
}