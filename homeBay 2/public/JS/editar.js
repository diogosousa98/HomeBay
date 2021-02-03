let imovel;

window.onload = function () {
    imovel = JSON.parse(sessionStorage.getItem('imovel')).IM_id;
    populateFields();
}

async function populateFields() {
    let res = await $.ajax({
        url: "/api/imoveis/" + imovel,
        method: "get",
        dataType: "json"
    });

    console.log(res);

    document.getElementById('nome').value = res.IM_nome;
    document.getElementById('area').value = res.IM_area;
    document.getElementById('tipologia').value = res.IM_tipologia;
    document.getElementById('preco').value = res.IM_preco;
    document.getElementById('mRua').value = res.IM_M_rua;
    document.getElementById('mNumero').value = res.IM_M_numero;
    document.getElementById('cpostal3').value = res.IM_M_cpostal3;
    document.getElementById('cpostal4').value = res.IM_M_cpostal4;
    document.getElementById('localidade').value = res.IM_M_localidade;
    document.getElementById('descricao').value = res.IM_descricao;
}

async function submit() {
    let body = {
        IM_id: imovel,
        IM_nome: document.getElementById('nome').value,
        IM_area: document.getElementById('area').value,
        IM_tipologia: document.getElementById('tipologia').value,
        IM_preco: document.getElementById('preco').value,
        IM_M_rua: document.getElementById('mRua').value,
        IM_M_numero: document.getElementById('mNumero').value,
        IM_M_cpostal3: document.getElementById('cpostal3').value,
        IM_M_cpostal4: document.getElementById('cpostal4').value,
        IM_M_localidade: document.getElementById('localidade').value,
        IM_descricao: document.getElementById('descricao').value
    }

    try {
        let result = await $.ajax({
            url: '/api/imoveis',
            method: 'put',
            dataType: 'json',
            data: JSON.stringify(body),
            contentType: 'application/json'
        });
        alert("Casa atualizada com sucesso");
    }
    catch (err) {
        alert("Algo correu mal")
    }
}