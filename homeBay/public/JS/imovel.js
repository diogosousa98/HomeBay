let imoveis;
let isAdmin = false;

window.onload = async function () {
  try {
    imoveis = await $.ajax({
      url: "/API/imoveis",
      method: "get",
    });
    let admin = sessionStorage.getItem('admin');
    if (admin == 'true') {
      isAdmin = true;

      document.getElementById('btnAddImovel').classList.remove('hidden');
    }
    else {

      document.getElementById('btnAddImovel').classList.add('hidden');
    }
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
        <section>
        <section>
        <p> ${imovel.IM_nome} </p>
        <p> Localidade: ${imovel.IM_M_localidade} </p>
        <p> Área: ${imovel.IM_area}m² </p> 
        <p> Preço: ${imovel.IM_preco}€ </p>
        </section>
        <img src="fotos/${imovel.IM_imagem}"/>
        </section>`;
    if (isAdmin != true) {
      html += `<input type="button" value="Mais Info" onclick= "showInfo(${index})"/>`;
    }
    else {
      html += `   <input type="button" value="Editar" onclick= "editar(${index})"/>`;
      html += `   <input type="button" value="Consultar Histórico" onclick="consultar(${index})"/>`;
    }
    html += `</section></div>`;
    document.getElementById("imovel").innerHTML += html;
  }
}

function addImovel() {
  window.location = '/addImovel.html';
}