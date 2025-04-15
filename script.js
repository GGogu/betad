function mostrarAba(id) {
    const abas = document.querySelectorAll('.aba');
    abas.forEach(aba => aba.classList.remove('ativa'));
    document.getElementById(id).classList.add('ativa');
  }
  
  function registrarProgresso(atividade) {
    const lista = document.getElementById('lista-progresso');
    const item = document.createElement('li');
    item.textContent = `Atividade completada: ${atividade}`;
    lista.appendChild(item);
  }
  