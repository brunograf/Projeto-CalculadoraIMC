var calculadora = document.getElementById("calculadora");
var formOriginal = calculadora.innerHTML;
var classificacao = "";

function calcular() {
    var peso = Number(document.getElementById("peso").value);
    var altura = Number(document.getElementById("altura").value) / 100; // Convertendo de cm para metros
    var imc = peso / (altura * altura);

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
    document.getElementsByClassName("res")[0].style.display = "flex";
    calculadora.innerHTML += "<br><button onclick='mostrarDicas()'>Consulte a recomendação</button>";
    calculadora.innerHTML += "<br><button onclick='novoCalculo()'>Novo cálculo</button>";
}

function mostrarDicas() {
    document.getElementsByClassName("quadro-dicas")[0].style.display = "block";
    document.getElementsByClassName("res")[0].style.display = "none";

    if (document.getElementById("classificacao").querySelector("h2").textContent === "Abaixo do peso") {
        document.getElementById("nutri").querySelector("p").textContent = "Aumente calorias com qualidade (proteínas e frutas) e tente fazer mais refeições ao dia.";
        document.getElementById("mental").querySelector("p").textContent = "Procure apoio psicológico para lidar com questões relacionadas à imagem corporal e autoestima.";
        document.getElementById("atividade").querySelector("p").textContent = "Pratique exercícios de resistência para ganhar massa muscular, como musculação.";
        document.getElementById("sono").querySelector("p").textContent = "Durma bem para ajudar na recuperação muscular e no ganho de peso saudável.";
    } else if (document.getElementById("classificacao").querySelector("h2").textContent === "Peso normal") {
        document.getElementById("nutri").querySelector("p").textContent = "Mantenha rotina alimentar com variedade, frutas, vegetais, proteínas adequadas e flexibilidade para incluir alimentos que você gosta.";
        document.getElementById("mental").querySelector("p").textContent = "Evite obsessão com balança. Foque em consistência, não em perfeição.";
        document.getElementById("atividade").querySelector("p").textContent = "Combine treino de força + cardio.";
        document.getElementById("sono").querySelector("p").textContent = "7-9 horas por noite ajudam a manter metabolismo regulado, apetite controlado e energia estável.";
    } else {
        document.getElementById("nutri").querySelector("p").textContent = "Não corte grupos alimentares radicalmente. Priorize proteína, fibras e alimentos pouco processados.";
        document.getElementById("mental").querySelector("p").textContent = "Evite dietas restritivas que geram culpa e deixam você passando vontade. Foque em mudanças fáceis e progressivas.";
        document.getElementById("atividade").querySelector("p").textContent = "Comece com o que é possível e evolua aos poucos. Caminhadas, exercícios em casa, academia, o importante é se mexer.";
        document.getElementById("sono").querySelector("p").textContent = "Melhorar o sono reduz fome, vontade e resistência à insulina. Sono ruim dificulta emagrecimento.";
    }

    calculadora.querySelectorAll("button").forEach(btn => btn.remove());
    calculadora.innerHTML += "<br><button onclick='novoCalculo()'>Novo cálculo</button>";
}

function novoCalculo() {
    calculadora.innerHTML = formOriginal;
}