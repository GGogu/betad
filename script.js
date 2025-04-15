function showSection(id) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  }
  
  function responderAtividade(numero) {
    const resultado = document.getElementById('progresso-resultados');
    const novaLinha = document.createElement('p');
    novaLinha.textContent = `Atividade ${numero} realizada com sucesso!`;
    resultado.appendChild(novaLinha);
    alert(`Você completou a Atividade ${numero}!`);
  }
  
  document.getElementById('form-questionario').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Questionário enviado com sucesso!');
  });
  