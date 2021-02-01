let imovel;

async function createCards() {
    let main = document.getElementById("imovel");
    imovel = JSON.parse(sessionStorage.getItem("imovel"));
    main.innerHTML += makeCard(imovel);
}

function makeCard(imovel) {
    return `<div class="grade-card">
            <h2> Imóvel: ${imovel.IM_nome} </h2>
            <h2> Rua: ${imovel.IM_M_rua} </h2>
        </div>`;
}

window.onload = () => {
    createCards();
    $('#data').datepicker({ dateFormat: 'yy/mm/dd' });
};

function mostraReservar() {
    document.getElementById('form').classList.remove('hidden');
}

async function reservar() {
    let nome = document.getElementById('nome').value;
    let telemovel = document.getElementById('telemovel').value;
    let email = document.getElementById('email').value;
    let data = document.getElementById('data').value;
    let hora = document.getElementById('hora').value;
    let body = {
        visita: {
            V_data: data,
            V_hora: hora,
            IM_id: imovel.IM_id,
        },
        cliente: {
            C_nome: nome,
            C_telefone: telemovel,
            C_email: email,
        }
    };
    console.log(body);
    let res = await $.ajax({
        type: "POST",
        url: '/api/visitas',
        data: JSON.stringify(body),
        dataType: 'json',
        contentType: "application/json"
    });
    if (res) {
        alert('Visita marcada!');
    }
    else {
        alert('Ocorreu um problema com a reserva,\n volte a tentar mais tarde.');
    }
}