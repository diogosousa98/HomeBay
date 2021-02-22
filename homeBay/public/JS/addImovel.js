async function submit() {
    let body = {
        IM_nome: document.getElementById('nome').value,
        IM_area: document.getElementById('area').value,
        IM_tipologia: document.getElementById('tipologia').value,
        IM_preco: document.getElementById('preco').value,
        IM_M_rua: document.getElementById('mRua').value,
        IM_M_numero: document.getElementById('mNumero').value,
        IM_M_cpostal3: document.getElementById('cpostal3').value,
        IM_M_cpostal4: document.getElementById('cpostal4').value,
        IM_M_localidade: document.getElementById('localidade').value,
        IM_descricao: document.getElementById('descricao').value,
        IM_M_latitude: 0,
        IM_M_longitude: 0,
        IM_imagem: '6.jpg',
        IM_estado: 'À venda',
        A_id: 3,
        AD_id: 3,
    }

    try {
        let result = await $.ajax({
            url: '/api/imoveis',
            method: 'post',
            dataType: 'json',
            contentType: "application/json",
            data: JSON.stringify(body),
            error: function (err) {
                console.log(err);
            },
        });
        alert("Casa atualizada com sucesso");
    }
    catch (err) {
        console.log(err);
        alert("Algo correu mal")
    }
}