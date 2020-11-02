document.getElementById("entrar").addEventListener("click", function () {
  document.getElementById("tela1").style.display = "none";
  document.getElementById("tela2").style.display = "block";
});
document.getElementById("addCar").addEventListener("click", function () {
  document.getElementById("tela2").style.display = "none";
  document.getElementById("tela3").style.display = "block";
});


document.getElementById("EnviaCar").addEventListener("click", function () {
  var placa = document.getElementById("placa").value;
  var modelo = document.getElementById("modelo").value;
  var Entrada = document.getElementById("Entrada").value;
  
  var carro=[placa,modelo,Entrada]
  var estacionamento =document.getElementById("novoCarro")
  var item ;
  carro.forEach(n => {
    item = document.createElement('div')
    item.textContent = n
    estacionamento.appendChild(item)
  });  
  document.getElementById("tela2").style.display = "block";
  document.getElementById("tela3").style.display = "none";
});

document.getElementById("removerCar2").addEventListener("click", function () {
  var carro = document.getElementById("veiclezebra");
  var parent = carro.parentNode;
  parent.removeChild(carro);
});
