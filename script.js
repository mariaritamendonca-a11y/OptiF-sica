// SELEÇÃO DOS ELEMENTOS DO DOM
const btnNormal = document.getElementById('btnNormal');
const btnMiopia = document.getElementById('btnMiopia');
const btnHipermetropia = document.getElementById('btnHipermetropia');
const statusText = document.getElementById('statusText');
const eyeDisplay = document.getElementById('eyeDisplay');

// FUNÇÃO PARA ATUALIZAR O ESTADO VISUAL
function setVisionState(state) {
  // Remove classes ativas dos botões
  [btnNormal, btnMiopia, btnHipermetropia].forEach(btn => btn.classList.remove('active'));

  if (state === 'normal') {
    btnNormal.classList.add('active');
    statusText.innerText = "Visão Normal: A luz foca EXATAMENTE na retina.";
    eyeDisplay.style.borderColor = "#1976d2";
  } else if (state === 'miopia') {
    btnMiopia.classList.add('active');
    statusText.innerText = "Miopia: A luz foca ANTES da retina. Objetos distantes ficam embaçados.";
    eyeDisplay.style.borderColor = "#d32f2f"; // Alerta em tom vermelho
  } else if (state === 'hipermetropia') {
    btnHipermetropia.classList.add('active');
    statusText.innerText = "Hipermetropia: A luz foca DEPOIS da retina. Dificuldade para enxergar de perto.";
    eyeDisplay.style.borderColor = "#f57c00"; // Alerta em tom laranja
  }
}

// EVENTOS DE CLIQUE
btnNormal.addEventListener('click', () => setVisionState('normal'));
btnMiopia.addEventListener('click', () => setVisionState('miopia'));
btnHipermetropia.addEventListener('click', () => setVisionState('hipermetropia'));
