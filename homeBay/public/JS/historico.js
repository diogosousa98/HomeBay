let visitas = [];

window.onload = async function () {
    visitas = await $.ajax({
        url: '/API/visitas/historico',
        method: 'GET'
    });

    makeCards();
}

function makeCards() {
    for (let visita of visitas) {
        let html = `<section class="card">
                        Reservado imóvel ${visita.IM_nome} para as ${visita.V_Hora} no dia ${getDate(visita.V_Data)} pelo cliente ${visita.C_nome}
                    </section>`;
        document.getElementById('main').innerHTML += html;
    }
}
function getDate(data) {
    return data.substring(data.indexOf('T'), -1);
}