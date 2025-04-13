const loginForm = document.getElementById('loginForm');
const loginSection = document.getElementById('login-section');
const activitySection = document.getElementById('activity-section');
const progressSection = document.getElementById('progress-section');
const progressoTexto = document.getElementById('progressoTexto');

let atividadeConcluida = false;
let respostaCorreta = false;

loginForm.addEventListener('submit', function(event) {
event.preventDefault();
loginSection.classList.add('hidden');
activitySection.classList.remove('hidden');
});

function allowDrop(ev) {
ev.preventDefault();
}

function drag(ev) {
ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
ev.preventDefault();
let letra = ev.dataTransfer.getData("text");
ev.target.textContent = letra;
respostaCorreta = letra === "S";
}

function finalizarAtividade() {
atividadeConcluida = true;
activitySection.classList.add('hidden');
progressSection.classList.remove('hidden');

if (respostaCorreta) {
progressoTexto.textContent = "Atividade realizada com sucesso! A criança completou a palavra corretamente.";
} else {
progressoTexto.textContent = "A criança fez a atividade, mas errou a palavra. Importante continuar praticando!";
}
}

function voltarInicio() {
progressSection.classList.add('hidden');
loginSection.classList.remove('hidden');
document.getElementById("drop-zone").textContent = "_";
}