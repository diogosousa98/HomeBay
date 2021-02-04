var map;
var imoveis;

window.onload = function () {


    // initialize Leaflet
    map = L.map('map').setView({ lon: -9.205317, lat: 38.769129 }, 11);

    // add the OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(map);

    // show the scale bar on the lower left corner
    L.control.scale().addTo(map);

    populateMarkers();
}

async function populateMarkers() {
    imoveis = await $.ajax({
        url: "/API/imoveis",
        method: "get",
    });
    for (var idx in imoveis) {
        let imovel = imoveis[idx];
        L.marker({ lat: imovel.IM_M_latitude, lon: imovel.IM_M_longitude }).bindPopup(`<p>${imovel.IM_nome}</p>
        <img src="fotos/${imovel.IM_imagem}"><br><button onclick="mostralocalizacao(${idx})">Ver</button>`).addTo(map);
    }
}

function mostralocalizacao(idx) {
    sessionStorage.setItem("imovel", JSON.stringify(imoveis[idx]));
    window.location = "info.html";
}