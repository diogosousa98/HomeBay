let imoveis;
let isAdmin = false;

window.onload = async function () {
  try {
    imoveis = await $.ajax({
      url: "/API/imoveis",
      method: "get",
    });
    let admin = sessionStorage.getItem('admin');
    if (admin == 'true')
      isAdmin = true;
    showImoveis(imoveis);
  } catch (err) {
    console.log(err);
  }
};

function showInfo(id) {
  sessionStorage.setItem("imovel", JSON.stringify(imoveis[id]));
  window.location = "info.html";
}

function editar(id) {
  sessionStorage.setItem("imovel", JSON.stringify(imoveis[id]));
  window.location = "editar.html";
}

function consultar(id) {
  sessionStorage.setItem("imovel", JSON.stringify(imoveis[id]));
  window.location = "consultar.html";
}

function showImoveis(imoveis) {
  for (let index in imoveis) {
    let html = "";
    let imovel = imoveis[index];
    html += `<div class="lista-imoveis">
        <h2> ${imovel.IM_nome} </h2>
        <h2> Localidade: ${imovel.IM_M_localidade} </h2>
        <h2> Área: ${imovel.IM_area}m² </h2> 
        <h2> Preço: ${imovel.IM_preco}€ </h2>
        <input type="button" value="Reservar" onclick= "showInfo(${index})"/>`;
    if (isAdmin == true) {
      html += `   <input type="button" value="Editar" onclick= "editar(${index})"/>`;
      html += `   <input type="button" value="Consultar Histórico" onclick="consultar(${index})"/>`;
    }
    html += `</div>`;
    document.getElementById("imovel").innerHTML += html;
  }
}