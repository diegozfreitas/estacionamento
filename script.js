document.querySelector("#tela1").style.display = "flex"; //alteração para exibir a tela

const park = {
  // objeto que pega as informaçoes para criar o veiculo
  veicle: [],
};

puxaVeiculos = () => {
  // função que escreve as informações do veiculo no html
  document.querySelector(".listVeicles").innerHTML = "";
  park.veicle.map((veicle) => {
    document.querySelector(".listVeicles").innerHTML += `
      <div class="veicle ${veicle.id % 2 ? "zebra" : ""} ">
        <div class="placa">${veicle.placa}</div>
        <div class="modelo">${veicle.modelo}</div>
        <div>${veicle.entrada}</div>
        <div class="actions">
          <button onclick="removerCarro()" id ="removerCar">
            <i class="fas fa-chevron-circle-right"></i>
          </button>
          <button id="EditCar">
            <i class="fas fa-edit"></i>
          </button>
        </div>
      </div>
    `;
  });
  var BTsEdit = document.querySelectorAll("#EditCar");

  BTsEdit.forEach((bt) => {
    bt.addEventListener("click", () => {
      var element = bt.parentElement.parentElement;

      document.querySelector("#tela2").style.display = "none";
      document.querySelector("#tela3").style.display = "flex";

      document.querySelector("input#placa").value = element.querySelector(
        ".placa"
      ).textContent;
      document.querySelector("input#modelo").value = element.querySelector(
        ".modelo"
      ).textContent;

      document.querySelector("form button#EnviaCar").textContent = "atualizar";
    });
  });
};

document.querySelector("#entrar").addEventListener("click", () => {
  // função que muda o display da tela 1 e 2
  document.querySelector("#tela1").style.display = "none";
  document.querySelector("#tela2").style.display = "flex";

  puxaVeiculos();
});

document.querySelector("#addCar").addEventListener("click", () => {
  // função que muda o display da tela 2 e 3
  document.querySelector("#tela2").style.display = "none";
  document.querySelector("#tela3").style.display = "flex";

  document.querySelector("#tela3").querySelector("input#placa").value = "";
  document.querySelector("#tela3").querySelector("input#modelo").value = "";
});
document.querySelector("#EnviaCar").addEventListener("click", (event) => {
  // função que coleta as informações que serão atribuidas ao veiculo
  event.preventDefault();

  if (
    document.querySelector("#tela3").querySelector("input#placa").value == "" ||
    document.querySelector("#tela3").querySelector("input#modelo").value == ""
  ) {
    alert("todos os campos são obrigatorios");
  }
  var placaform = document.querySelector("#tela3").querySelector("input#placa")
    .value;
  var modeloform = document
    .querySelector("#tela3")
    .querySelector("input#modelo").value;

  if(park.veicle.find(veicle => veicle.placa == placaform)){
    console.log("edita")
  }else{
    console.log("guarda")
    park.veicle.push({
      placa: placaform,
      modelo: modeloform,
    });
  }

  document.querySelector("#tela3").style.display = "none"; //mudança no display da tela 3 e da tela 2
  document.querySelector("#tela2").style.display = "flex";

  puxaVeiculos();

  console.log(park.veicle);
});

document.querySelector("#Cancelar").addEventListener("click", (cancel) => {
  cancel.preventDefault();

  document.querySelector("#tela3").style.display = "none";
  document.querySelector("#tela2").style.display = "flex";
});

function removerCarro() {
  park.veicle.shift();
  var pai = document.querySelector(".listVeicles");
  var ve = document.querySelector(".veicle");
  pai.removeChild(ve);
  console.log(park.veicle);
}
