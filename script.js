document.getElementById("entrar").addEventListener("click" , function(){
    document.getElementById("tela1").style.display = "none";
    document.getElementById("tela2").style.display = "block";
})
document.getElementById("addCar").addEventListener("click" , function(){
    document.getElementById("tela2").style.display = "none";
    document.getElementById("tela3").style.display = "block";
})

function enviar(){
    document.getElementById("EnviaCar").addEventListener("click" , function(){
        var lista = document.getElementsByClassName("listVeicles");
        var novaPlaca = document.getElementById("placa").value;
        var novoCarro = document.getElementById("modelo").value;
        var novaEntrada = document.getElementById("Entrada").value;
        var div1 = document.createElement("div");
        div1.textContent = novaPlaca;
        lista.appendChild(div1);
        var div2 = document.createElement("div");
        div2.textContent = novoCarro;
        lista.appendChild(div2);
        var div3 = document.createElement("div");
        div3.textContent = novaEntrada;
        lista.appendChild(div3);       
    })
}