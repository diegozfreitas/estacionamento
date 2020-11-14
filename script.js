document.querySelector("#tela1").style.display = "flex"; //alteração para exibir a tela

const park = {
  // objeto que pega as informaçoes para criar o veiculo
  veicle: [],
};

puxaVeiculos = () => {
  // função que escreve as informações do veiculo no html
  park.veicle.map((veicle) => {
    document.querySelector(".listVeicles").innerHTML += `
      <div class="veicle ${veicle.id % 2 ? "zebra" : ""} ">
        <div class="placa">${veicle.placa}</div>
        <div class="modelo">${veicle.modelo}</div>
        <div class="entrada">${veicle.entrada}</div>
        <div class="actions">
          <button onclick="removerCarro()" id ="removerCar">
            <i class="fas fa-chevron-circle-right"></i>
          </button>
          <button onclick="editarCarro()" id="EditCar">
            <i class="fas fa-edit"></i>
          </button>
        </div>
      </div>
    `;
  });
};

document.querySelector("#entrar").addEventListener("click", () => {
  // função que muda o display da tela 1 e 2
  document.querySelector("#tela1").style.display = "none";
  document.querySelector("#tela2").style.display = "flex";
});

document.querySelector("#addCar").addEventListener("click", () => {
  // função que muda o display da tela 2 e 3
  document.querySelector("#tela2").style.display = "none";
  document.querySelector("#tela3").style.display = "flex";
});
document.querySelector("#EnviaCar").addEventListener("click", (event) => {
  // função que coleta as informações que serão atribuidas ao veiculo
  event.preventDefault();

  if (
    document.querySelector("#tela3").querySelector("input#placa").value == "" ||
    document.querySelector("#tela3").querySelector("input#modelo").value ==
      "" ||
    document.querySelector("#tela3").querySelector("input#entrada").value == ""
  ) {
    alert("todos os campos são obrigatorios");
  }
  var placaform = document.querySelector("#tela3").querySelector("input#placa")
    .value;
  var modeloform = document
    .querySelector("#tela3")
    .querySelector("input#modelo").value;
  var entradaform = document
    .querySelector("#tela3")
    .querySelector("input#entrada").value;

  park.veicle.push({
    placa: placaform,
    modelo: modeloform,
    entrada: entradaform,
  });

  document.querySelector("#tela3").style.display = "none"; //mudança no display da tela 3 e da tela 2
  document.querySelector("#tela2").style.display = "flex";

  document.querySelector("input#placa").value = "";
  document.querySelector("input#modelo").value = "";
  document.querySelector("input#entrada").value = "";

  puxaVeiculos();

  console.log(park.veicle)
});

function removerCarro() {
  park.veicle.shift();
  var pai = document.querySelector(".listVeicles");
  var ve = document.querySelector(".veicle");
  pai.removeChild(ve);
  console.log(park.veicle)
}

function editarCarro(){

  document.querySelector("#tela2").style.display = "none";
  document.querySelector("#tela3").style.display = "flex";

  var placa2 = document.querySelector(".placa").textContent;
  var modelo2 = document.querySelector(".modelo").textContent;
  var entrada2 = document.querySelector(".entrada").textContent;

  var placaform2 = document.querySelector("#tela3").querySelector("input#placa").value;
  var modeloform2 = document.querySelector("#tela3").querySelector("input#modelo").value;
  var entradaform2 = document.querySelector("#tela3").querySelector("input#entrada").value;

  document.querySelector("#EnviaCar").addEventListener("click", () => {
    placa2 = placaform2;
    modelo2 = modeloform2;
    entrada2 = entradaform2;
  })

} 