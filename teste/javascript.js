let nome = 'Sophia';  
const idade = 20;
let cidade = 'Santos';

function dizerOla() {
    alert("Olá, meu nome é " + nome +", tenho " + idade + " anos e moro em " + cidade + ".");
}

document.getElementById("meuBotao").addEventListener("click", dizerOla);

function mudarTexto () {
    document.getElementById("meuTextoBotao").innerText = "Você clicou no botão!";
}

document.getElementById("meuTextoBotao").addEventListener("click", mudarTexto);

let contador = 0;
function contar() {
    contador++;
    document.getElementById("meuContador").innerText = "Contador: " + contador;
}

document.getElementById("meuContador").addEventListener("click", contar);


function validarIdade() {
    const idade = Number(document.getElementById("idade").value);    
    if (idade >= 18) {

        alert("Você é maior de idade.");
    } else {

        alert( "Você é menor de idade.");
    }
}

document.getElementById("botaoIdade").addEventListener("click", validarIdade);


function toggleTexto() {
    const paragrafo = document.getElementById("textoToggle");
    if (paragrafo.style.display === "none") {
        paragrafo.style.display = "block";
    }else {
        paragrafo.style.display = "none";
    }
}
document.getElementById("botaoToggle").addEventListener("click", toggleTexto);

function atualizarRelogio() {
    const agora = new Date();
    const horas = agora.getHours().toString().padStart(2, "0");
    const minutos = agora.getMinutes().toString().padStart(2, "0");
    const segundos = agora.getSeconds().toString().padStart(2, "0");
    document.getElementById("relogio").innerText = `${horas}:${minutos}:${segundos}`;
}
setInterval(atualizarRelogio, 1000);


function gerarMedia() {
    nota1 = document.getElementById("nota1").value;
    nota2 = document.getElementById("nota2").value;
    media = (Number(nota1) + Number(nota2)) / 2;
    alert("A sua média é " + media);
}

document.getElementById("botaoMedia").addEventListener("click", gerarMedia);

function limparCampos() {
    docuemnt.getElementById("botaoLimpar").value = "";
}


function checkVerde(checkbox ) {
    if(checkbox.checked) {
        checkbox.parentElement.style.color = "green"
    } else
    {
        checkbox.parentElement.style.color = "black";
    }
}