let imoveis;

window.onload = async function () {
  try {
    imoveis = await $.ajax({
      url: "/API/imoveis",
      method: "get",
    });
    showImoveis(imoveis);
  } catch (err) {
    console.log(err);
  }
};

function showInfo(id){
  sessionStorage.setItem("imovel", JSON.stringify(imoveis[id]));
  window.location = "info.html";
}

function showImoveis (imoveis){
    let html = "";
    for (let index in imoveis) { 
        let imovel = imoveis[index];        
        html += `<div class="lista-imoveis" onclick= "showInfo(${imovel.IM_id})">
        <h2> ${imovel.IM_nome} </h2>
        <h2> Localidade: ${imovel.IM_M_localidade} </h2>
        <h2> Área: ${imovel.IM_area}m² </h2> 
        <h2> Preço: ${imovel.IM_preco}€ </h2> 
        </div>`; 
    }
    document.getElementById("imovel").innerHTML = html;
}