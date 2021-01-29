async function createCards() {
    let main = document.getElementById("imovel");
    let imovel = JSON.parse(sessionStorage.getItem("imovel"));
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
};