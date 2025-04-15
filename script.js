// Navegação entre seções
document.getElementById('btnAluno').addEventListener('click', () => {
    document.getElementById('welcome').classList.add('hidden');
    document.getElementById('aluno').classList.remove('hidden');
  });
  
  document.getElementById('btnPais').addEventListener('click', () => {
    document.getElementById('welcome').classList.add('hidden');
    document.getElementById('pais').classList.remove('hidden');
  });
  
  document.getElementById('backAluno').addEventListener('click', () => {
    document.getElementById('aluno').classList.add('hidden');
    document.getElementById('welcome').classList.remove('hidden');
  });
  
  document.getElementById('backPais').addEventListener('click', () => {
    document.getElementById('pais').classList.add('hidden');
    document.getElementById('welcome').classList.remove('hidden');
  });
  
  // Lógica do exercício de arrastar e soltar
  const letters = document.querySelectorAll('.letter');
  const dropArea = document.getElementById('dropArea');
  const feedback = document.getElementById('feedback');
  
  let correctCount = 0;
  let incorrectCount = 0;
  const correctWord = "CASA";
  
  // Configura eventos de arrastar
  letters.forEach(letter => {
    letter.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', letter.dataset.letter);
    });
  });
  
  // Permitir o drop
  dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
  
  // Lógica ao soltar a letra
  dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    const letra = e.dataTransfer.getData('text/plain');
    dropArea.textContent += letra;
    
    // Verifica se já completou a palavra (4 letras)
    if (dropArea.textContent.length === 4) {
      if (dropArea.textContent === correctWord) {
        feedback.textContent = "Parabéns! Palavra correta.";
        correctCount++;
        document.getElementById('correctCount').textContent = correctCount;
      } else {
        feedback.textContent = "Ops! Palavra incorreta. Tente novamente.";
        incorrectCount++;
        document.getElementById('incorrectCount').textContent = incorrectCount;
      }
      // Reinicia o exercício após 1.5 segundos
      setTimeout(() => {
        dropArea.textContent = "";
        feedback.textContent = "";
      }, 1500);
    }
  });
  