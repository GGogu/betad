const atividades = [
    "Quantas letras tem a palavra 'bola'?",
    "Conte até 5.",
    "Quantos lados tem um quadrado?",
    "Qual a primeira letra do seu nome?",
    "Qual é maior: 3 ou 7?",
    "Diga uma fruta que começa com a letra M.",
    "Qual cor aparece quando misturamos azul e amarelo?",
    "Qual animal faz 'miau'?",
    "Diga um número entre 1 e 10.",
    "Qual é a capital do Brasil?"
  ];
  
  const respostas = [];
  
  function mostrarAba(aba) {
    document.querySelectorAll('.aba').forEach(div => div.classList.add('hidden'));
    document.getElementById(aba).classList.remove('hidden');
    if (aba === 'progresso') {
      mostrarProgresso();
    }
  }
  
  function criarAtividades() {
    const container = document.getElementById('listaAtividades');
    atividades.forEach((atividade, index) => {
      const div = document.createElement('div');
      div.className = 'atividade';
      div.innerHTML = `
        <p>${atividade}</p>
        <button onclick="responderAtividade(${index})">Responder</button>
      `;
      container.appendChild(div);
    });
  }
  
  function responderAtividade(i) {
    const resposta = prompt(atividades[i]);
    if (resposta !== null) {
      respostas[i] = resposta;
      alert("Resposta registrada!");
    }
  }
  
  function mostrarProgresso() {
    const container = document.getElementById('resultadoProgresso');
    container.innerHTML = '';
    atividades.forEach((atividade, i) => {
      const resposta = respostas[i] ? respostas[i] : 'Não respondida';
      const div = document.createElement('div');
      div.className = 'atividade';
      div.innerHTML = `<strong>${atividade}</strong><br>Resposta: ${resposta}`;
      container.appendChild(div);
    });
  }
  
  document.getElementById('formQuestionario').addEventListener('submit', e => {
    e.preventDefault();
    alert("Obrigado por responder! Suas respostas foram registradas.");
  });
  
  window.onload = criarAtividades;
  