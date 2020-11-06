document.querySelector("#tela1").style.display = "flex";

const park = {
  veicle: [],
};


puxaVeiculos = () => {
  park.veicle.map((veicle) => {
    document.querySelector(".listVeicles").innerHTML += `
      <div class="veicle ${veicle.id % 2 ? "zebra" : ""} ">
        <div class="placa">${veicle.carros}</div>
        <div class="modelo">${veicle.modelo}</div>
        <div class="entrada">${veicle.entrada}</div>
        <div class="actions">
          <button id ="removerCar">
            <i class="fas fa-chevron-circle-right"></i>
          </button>
          <button id="EditCar">
            <i class="fas fa-edit"></i>
          </button>
        </div>
      </div>
    `;
  });
};

document.querySelector("#entrar").addEventListener("click", () => {
  document.querySelector("#tela1").style.display = "none";
  document.querySelector("#tela2").style.display = "flex";
});

document.querySelector("#addCar").addEventListener("click", () => {
  document.querySelector("#tela2").style.display = "none";
  document.querySelector("#tela3").style.display = "flex";
});
document.querySelector("#EnviaCar").addEventListener("click", (event) => {
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

  document.querySelector("#tela3").style.display = "none";
  document.querySelector("#tela2").style.display = "flex";

  puxaVeiculos();
  console.log(carroEstacionado)
});

const carroEstacionado = { 
   carro : park.veicle,
}