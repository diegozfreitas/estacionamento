document.getElementById("entrar").addEventListener("click", function () {
  document.getElementById("tela1").style.display = "none";
  document.getElementById("tela2").style.display = "block";
});
document.getElementById("addCar").addEventListener("click", function () {
  document.getElementById("tela2").style.display = "none";
  document.getElementById("tela3").style.display = "block";
});

document.getElementById("EnviaCar").addEventListener("click", function () {
  var placa = document.getElementById("novaPlaca");
  var modelo = document.getElementById("novoModelo")
  var Entrada = document.getElementById("novaEntrada")
  var novaPlaca = document.getElementById("placa").value;
  var novoCarro = document.getElementById("modelo").value;
  var novaEntrada = document.getElementById("Entrada").value;
  var div1 = document.createElement("div");
  div1.textContent = novaPlaca;
  placa.appendChild(div1);
  var div2 = document.createElement("div");
  div2.textContent = novoCarro;
  modelo.appendChild(div2);
  var div3 = document.createElement("div");
  div3.textContent = novaEntrada;
  Entrada.appendChild(div3);
  document.getElementById("tela3").style.display = "none";
  document.getElementById("tela2").style.display = "block";
});

document.getElementById("removerCar2").addEventListener("click", function(){
  document.getElementById("placa2").textContent ="";
  document.getElementById("modelo2").textContent = "";
  document.getElementById("entrada2").textContent = "";
  var lista = document.getElementsByClassName('ul')[0];
  var itens = lista.getElementsByTagName('div');
  lista.removeChild(itens[1])
})
