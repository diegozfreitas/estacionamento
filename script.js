document.querySelector("#tela1").style.display = "flex"; //alteração para exibir a tela

const park = {
  // objeto que pega as informaçoes para criar o veiculo
veicle: [{placa : "mosmwow", modelo : "mxmoexm", entrada : "12:32"}],
};

puxaVeiculos = () => {
  // função que escreve as informações do veiculo no html
  document.querySelector(".listVeicles").innerHTML = "";

  var count = 0;

  park.veicle.map((veicle) => {
    count++;
    document.querySelector(".listVeicles").innerHTML += `
      <div class="veicle ${count % 2 ? "zebra" : ""} ">
        <div class="placa">${veicle.placa}</div>
        <div class="modelo">${veicle.modelo}</div>
        <div>${veicle.entrada}</div>
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
  var BTsEdit = document.querySelectorAll("#EditCar");

  BTsEdit.forEach((bt) => {
    
    bt.addEventListener("click", () => {
      var element = bt.parentElement.parentElement;

      edit();
      
      document.querySelector("#tela2").style.display = "none";
      document.querySelector("#tela3").style.display = "flex";

      document.querySelector("form input#placa").value = element.querySelector(
        ".placa"
      ).textContent;
      document.querySelector("form input#modelo").value = element.querySelector(
        ".modelo"
      ).textContent;

      document.querySelector("form button#EnviaCar").textContent = "atualizar";
    });
  });

  var BTsAdd = document.querySelectorAll("#addCar");

  BTsAdd.forEach((bt2) => {
    
    bt2.addEventListener("click", () => {
      var element = bt2.parentElement.parentElement;

      Add();
      
      document.querySelector("#tela2").style.display = "none";
      document.querySelector("#tela3").style.display = "flex";

      document.querySelector("form input#placa").value ="";
      document.querySelector("form input#modelo").value ="";
    });
  });

  var BTsDeleteCar = document.querySelectorAll("#removerCar");

  BTsDeleteCar.forEach((bt3) => {
    bt3.addEventListener("click", () => {
      var element = bt3.parentElement.parentElement.querySelector(".placa")
        .textContent;
      var deletar = confirm(
        `pressione "ok" para excluir o veiculo placa "${element}"`
      );
      if ((deletar = true)) {
        deleteveiculo(element);
      }
    });
  });
};

deleteveiculo = (element) => {
  var index = park.veicle.findIndex((v) => v.placa == element);
  park.veicle.splice(index, 1);
  puxaVeiculos();
};
document.querySelector("#entrar").addEventListener("click", () => {
  // função que muda o display da tela 1 e 2
  document.querySelector("#tela1").style.display = "none";
  document.querySelector("#tela2").style.display = "flex";

  console.log(park.veicle);

  puxaVeiculos();
});

function Add(){ 
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

  var now = new Date();
  var horario = now.getHours() + ":" + now.getMinutes();

  park.veicle.push({placa : placaform , modelo : modeloform , entrada : horario})
  

  document.querySelector("#tela3").style.display = "none"; //mudança no display da tela 3 e da tela 2
  document.querySelector("#tela2").style.display = "flex";

  puxaVeiculos();

  console.log(park.veicle);
});
}

document.querySelector("#Cancelar").addEventListener("click", (cancel) => {
  cancel.preventDefault();

  document.querySelector("#tela3").style.display = "none";
  document.querySelector("#tela2").style.display = "flex";
});


function edit(){
  console.log("mod")
  document.querySelector("#EnviaCar").addEventListener("click" , (e)=>{
    var placaform = document.querySelector("#tela3").querySelector("input#placa").value;
    var modeloform = document.querySelector("#tela3").querySelector("input#modelo").value;
    e.preventDefault();
   
    document.querySelector(".placa").textContent =placaform;
    document.querySelector(".modelo").textContent =modeloform;
    console.log(park.veicle);
    document.querySelector("#tela3").style.display = "none";
    document.querySelector("#tela2").style.display = "flex";
  })
}