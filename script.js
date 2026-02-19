var calculadora = document.getElementById("calculadora");
var formOriginal = calculadora.innerHTML;

function calcular() {
    var peso = Number(document.getElementById("peso").value);
    var altura = Number(document.getElementById("altura").value);

    if (altura < 9.9) {
    alert("A altura deve ser em centímetros.");
    return;
    }

    var alturaCm = Number(document.getElementById("altura").value) / 100; // Convertendo de cm para metros
    var imc = peso / (alturaCm * alturaCm);
    var classificacao = "";

    if (isNaN(imc) || imc <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Acima do peso";
    } else if (imc >= 30 && imc < 35) {
        classificacao = "Obesidade classe I";
    } else if (imc >= 35 && imc < 40) {
        classificacao = "Obesidade classe II";
    } else {
        classificacao = "Obesidade classe III";
    }

    document.getElementById("form").style.display = "none";
    document.querySelector("section>h2").style.display = "none";
    document.getElementById("imc").querySelector("h2").textContent = imc.toFixed(2);
    document.getElementById("classificacao").querySelector("h2").textContent = classificacao;
    document.getElementById("imc").classList.remove("circulo");
    document.getElementById("classificacao").classList.remove("circulo");
    calculadora.innerHTML += "<br><button onclick='novoCalculo()'>Novo cálculo</button>";
}

function novoCalculo() {
    calculadora.innerHTML = formOriginal;
}