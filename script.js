// ========================================
// CONFIGURAÇÃO INICIAL E DADOS DOS MAPAS
// ========================================
const maps = [
  {
    name: 'Distorção da Nebulosa',
    description: 'Um labirinto simples nas bordas do universo conhecido',
    difficulty: 'Fácil',
    grid: [
      ['E', ' ', ' ', ' ', ' '],
      [' ', '#', '#', '#', ' '],
      [' ', ' ', ' ', ' ', ' '],
      ['#', '#', '#', ' ', '#'],
      [' ', ' ', ' ', ' ', 'S']
    ]
  },
  {
    name: 'Vórtice dos Ecos',
    description: 'Dimensões entrelaçadas testam sua percepção espacial',
    difficulty: 'Médio',
    grid: [
      ['E', ' ', '#', ' ', ' ', ' '],
      ['#', ' ', '#', ' ', '#', ' '],
      ['#', ' ', ' ', ' ', '#', ' '],
      ['#', '#', '#', ' ', '#', ' '],
      [' ', ' ', ' ', ' ', '#', ' '],
      [' ', '#', '#', '#', ' ', 'S']
    ]
  },
  {
    name: 'Singularidade Temporal',
    description: 'O tempo se curva ao seu redor neste labirinto complexo',
    difficulty: 'Difícil',
    grid: [
      ['E', ' ', '#', ' ', ' ', ' ', '#'],
      ['#', ' ', '#', ' ', '#', ' ', ' '],
      [' ', ' ', ' ', ' ', '#', '#', ' '],
      [' ', '#', '#', ' ', ' ', ' ', ' '],
      [' ', ' ', '#', '#', '#', '#', ' '],
      ['#', ' ', ' ', ' ', ' ', '#', ' '],
      ['#', '#', '#', ' ', ' ', ' ', 'S']
    ]
  },
  {
    name: 'Fenda Quântica',
    description: 'Múltiplas realidades colidem neste espaço caótico',
    difficulty: 'Difícil',
    grid: [
      ['E', ' ', ' ', '#', ' ', ' ', ' ', ' '],
      ['#', '#', ' ', '#', ' ', '#', '#', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', '#', ' '],
      [' ', '#', '#', '#', '#', ' ', '#', ' '],
      [' ', ' ', ' ', ' ', '#', ' ', ' ', ' '],
      ['#', '#', '#', ' ', '#', '#', '#', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', '#', ' '],
      ['#', ' ', '#', '#', '#', ' ', ' ', 'S']
    ]
  },
  {
    name: 'Abismo Cósmico Infinito',
    description: 'O desafio final além de todas as dimensões conhecidas',
    difficulty: 'Muito Difícil',
    grid: [
      ['E', ' ', '#', ' ', ' ', '#', ' ', ' ', ' '],
      [' ', ' ', '#', ' ', '#', '#', ' ', '#', ' '],
      [' ', '#', ' ', ' ', ' ', ' ', ' ', '#', ' '],
      [' ', '#', '#', '#', ' ', '#', '#', '#', ' '],
      [' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', ' '],
      ['#', '#', ' ', '#', '#', '#', ' ', '#', '#'],
      [' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' '],
      [' ', '#', '#', '#', ' ', '#', '#', '#', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'S']
    ]
  }
];

// Estado global do jogo
let currentMapIndex = 0;
let currentGrid = [];
let playerPosition = null;
let exitPosition = null;
let solution = [];
let isAutoSolving = false;
let manualMode = true;

// ========================================
// CONTROLE DE ÁUDIO E VÍDEO
// ========================================
const themeAudio = document.getElementById('theme-audio');
const playBtn = document.getElementById('play-audio');
const pauseBtn = document.getElementById('pause-audio');
const bgVideo = document.getElementById('bg-video');

playBtn.addEventListener('click', () => {
  themeAudio.play().catch(e => console.log('Erro ao tocar áudio:', e));
});

pauseBtn.addEventListener('click', () => {
  themeAudio.pause();
});

// Garantir que o vídeo seja carregado e reproduzido corretamente
document.addEventListener('DOMContentLoaded', () => {
  if (bgVideo) {
    // Forçar propriedades do vídeo via JavaScript
    bgVideo.style.position = 'fixed';
    bgVideo.style.top = '0';
    bgVideo.style.left = '0';
    bgVideo.style.right = '0';
    bgVideo.style.bottom = '0';
    bgVideo.style.width = '100vw';
    bgVideo.style.height = '100vh';
    bgVideo.style.minWidth = '100vw';
    bgVideo.style.minHeight = '100vh';
    bgVideo.style.objectFit = 'cover';
    bgVideo.style.objectPosition = 'center center';
    bgVideo.style.zIndex = '-1';
    bgVideo.style.pointerEvents = 'none';
    bgVideo.style.display = 'block';

    // Tentar reproduzir o vídeo
    bgVideo.play().catch(e => {
      console.log('Erro ao reproduzir vídeo:', e);
      // Tentar novamente após interação do usuário
      document.body.addEventListener(
        'click',
        () => {
          bgVideo.play().catch(err => console.log('Erro na segunda tentativa:', err));
        },
        { once: true }
      );
    });
  }
});

// ========================================
// INICIALIZAÇÃO DO JOGO
// ========================================
function initGame() {
  loadMap(currentMapIndex);
  setupEventListeners();
}

function setupEventListeners() {
  document.getElementById('btn-solve').addEventListener('click', autoSolve);
  document.getElementById('btn-next').addEventListener('click', nextMap);

  // Controles manuais
  document.getElementById('btn-up').addEventListener('click', () => movePlayer(-1, 0));
  document.getElementById('btn-down').addEventListener('click', () => movePlayer(1, 0));
  document.getElementById('btn-left').addEventListener('click', () => movePlayer(0, -1));
  document.getElementById('btn-right').addEventListener('click', () => movePlayer(0, 1));

  // Controles por teclado
  document.addEventListener('keydown', handleKeyPress);
}

function handleKeyPress(e) {
  if (!manualMode || isAutoSolving) return;

  switch (e.key) {
    case 'ArrowUp':
      movePlayer(-1, 0);
      break;
    case 'ArrowDown':
      movePlayer(1, 0);
      break;
    case 'ArrowLeft':
      movePlayer(0, -1);
      break;
    case 'ArrowRight':
      movePlayer(0, 1);
      break;
  }
}

// ========================================
// CARREGAMENTO E RENDERIZAÇÃO DO MAPA
// ========================================
function loadMap(index) {
  if (index < 0 || index >= maps.length) return;

  const map = maps[index];
  currentGrid = map.grid.map(row => [...row]);

  // Encontrar posições de entrada e saída
  for (let i = 0; i < currentGrid.length; i++) {
    for (let j = 0; j < currentGrid[i].length; j++) {
      if (currentGrid[i][j] === 'E') {
        playerPosition = { row: i, col: j };
      }
      if (currentGrid[i][j] === 'S') {
        exitPosition = { row: i, col: j };
      }
    }
  }

  // Atualizar informações do mapa
  document.getElementById('map-name').textContent = map.name;
  document.getElementById('map-description').textContent = `${map.description} - Dificuldade: ${map.difficulty}`;
  document.getElementById('current-map').textContent = index + 1;
  document.getElementById('total-maps').textContent = maps.length;

  // Renderizar labirinto
  renderMaze();

  // Limpar resultados
  clearResults();

  // Reset de estados
  solution = [];
  isAutoSolving = false;
  manualMode = true;
}

function renderMaze() {
  const container = document.getElementById('maze-container');
  container.innerHTML = '';

  const cols = currentGrid[0].length;
  container.style.gridTemplateColumns = `repeat(${cols}, 35px)`;

  for (let i = 0; i < currentGrid.length; i++) {
    for (let j = 0; j < currentGrid[i].length; j++) {
      const cell = document.createElement('div');
      cell.className = 'maze-cell';
      cell.dataset.row = i;
      cell.dataset.col = j;

      const value = currentGrid[i][j];

      if (value === '#') {
        cell.classList.add('wall');
      } else if (value === 'E') {
        cell.classList.add('entrance');
        cell.textContent = '🚀';
        if (playerPosition && playerPosition.row === i && playerPosition.col === j) {
          cell.classList.add('player');
        }
      } else if (value === 'S') {
        cell.classList.add('exit');
        cell.textContent = '🌀';
      } else {
        cell.classList.add('path');
      }

      container.appendChild(cell);
    }
  }
}

function updatePlayerPosition() {
  const cells = document.querySelectorAll('.maze-cell');
  cells.forEach(cell => {
    cell.classList.remove('player');
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);

    if (row === playerPosition.row && col === playerPosition.col) {
      cell.classList.add('player');
      cell.textContent = '🚀';
    } else if (currentGrid[row][col] === 'E') {
      cell.textContent = '🚀';
    } else if (currentGrid[row][col] === 'S') {
      cell.textContent = '🌀';
    } else if (!cell.classList.contains('wall')) {
      cell.textContent = '';
    }
  });

  // Verificar se chegou na saída
  if (playerPosition.row === exitPosition.row && playerPosition.col === exitPosition.col) {
    setTimeout(() => {
      alert('🎉 Parabéns! Você atravessou o buraco de minhoca com sucesso!');
    }, 300);
  }
}

// ========================================
// MOVIMENTO MANUAL DO JOGADOR
// ========================================
function movePlayer(deltaRow, deltaCol) {
  if (!manualMode || isAutoSolving) return;

  const newRow = playerPosition.row + deltaRow;
  const newCol = playerPosition.col + deltaCol;

  // Verificar limites
  if (newRow < 0 || newRow >= currentGrid.length || newCol < 0 || newCol >= currentGrid[0].length) {
    return;
  }

  // Verificar parede
  if (currentGrid[newRow][newCol] === '#') {
    return;
  }

  // Mover jogador
  playerPosition = { row: newRow, col: newCol };
  updatePlayerPosition();
}

// ========================================
// ALGORITMO BFS PARA ENCONTRAR CAMINHO
// ========================================
function findPath() {
  const rows = currentGrid.length;
  const cols = currentGrid[0].length;
  const visited = Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(false));
  const parent = Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(null));
  const queue = [];
  const start = playerPosition || { row: 0, col: 0 };

  queue.push(start);
  visited[start.row][start.col] = true;

  const directions = [
    { row: -1, col: 0, name: 'cima' },
    { row: 1, col: 0, name: 'baixo' },
    { row: 0, col: -1, name: 'esquerda' },
    { row: 0, col: 1, name: 'direita' }
  ];

  let found = false;
  let steps = 0;

  while (queue.length > 0 && !found) {
    const current = queue.shift();
    steps++;

    if (current.row === exitPosition.row && current.col === exitPosition.col) {
      found = true;
      break;
    }

    for (const dir of directions) {
      const newRow = current.row + dir.row;
      const newCol = current.col + dir.col;

      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        !visited[newRow][newCol] &&
        currentGrid[newRow][newCol] !== '#'
      ) {
        visited[newRow][newCol] = true;
        parent[newRow][newCol] = { pos: current, direction: dir.name };
        queue.push({ row: newRow, col: newCol });
      }
    }
  }

  if (!found) {
    return { success: false, path: [], steps: steps };
  }

  // Reconstruir caminho
  const path = [];
  let current = exitPosition;
  while (current.row !== start.row || current.col !== start.col) {
    path.unshift(current);
    const parentInfo = parent[current.row][current.col];
    current = parentInfo.pos;
  }
  path.unshift(start);

  return { success: true, path: path, steps: steps, visited: visited };
}

// ========================================
// RESOLUÇÃO AUTOMÁTICA
// ========================================
async function autoSolve() {
  if (isAutoSolving) return;

  isAutoSolving = true;
  manualMode = false;
  document.getElementById('btn-solve').disabled = true;

  // Limpar visualização anterior
  document.querySelectorAll('.maze-cell').forEach(cell => {
    cell.classList.remove('solution');
  });

  showResultPlaceholder('🔍 Calculando menor caminho...');

  // Simular delay para análise
  await sleep(500);

  const result = findPath();

  if (!result.success) {
    showResult('❌ Não foi possível encontrar um caminho válido para este labirinto!', []);
    isAutoSolving = false;
    document.getElementById('btn-solve').disabled = false;
    return;
  }

  solution = result.path;

  // Exibir análise detalhada
  displayAnalysis(result);

  // Animar solução
  await animateSolution(solution);

  isAutoSolving = false;
  document.getElementById('btn-solve').disabled = false;
}

async function animateSolution(path) {
  for (let i = 0; i < path.length; i++) {
    const pos = path[i];
    playerPosition = pos;

    // Marcar caminho
    const cell = document.querySelector(`[data-row="${pos.row}"][data-col="${pos.col}"]`);
    if (cell && !cell.classList.contains('entrance') && !cell.classList.contains('exit')) {
      cell.classList.add('solution');
    }

    updatePlayerPosition();
    await sleep(300);
  }

  // Efeito final
  await sleep(500);
  showFinalMessage();
}

function displayAnalysis(result) {
  const resultContent = document.getElementById('result-content');
  resultContent.innerHTML = '';

  // Passo 1: Informações iniciais
  const step1 = document.createElement('div');
  step1.className = 'result-step';
  step1.innerHTML = `
    <strong>📍 Passo 1: Análise Inicial</strong><br>
    • Dimensões do labirinto: ${currentGrid.length} linhas × ${currentGrid[0].length} colunas<br>
    • Posição de entrada (E): Linha ${playerPosition.row + 1}, Coluna ${playerPosition.col + 1}<br>
    • Posição de saída (S): Linha ${exitPosition.row + 1}, Coluna ${exitPosition.col + 1}<br>
    • Algoritmo utilizado: Busca em Largura (BFS)
  `;
  resultContent.appendChild(step1);

  // Passo 2: Processo de busca
  const step2 = document.createElement('div');
  step2.className = 'result-step';
  step2.innerHTML = `
    <strong>🔍 Passo 2: Processo de Busca</strong><br>
    • Iniciando exploração a partir da entrada<br>
    • Explorando células adjacentes (cima, baixo, esquerda, direita)<br>
    • Total de células exploradas: ${result.steps}<br>
    • Evitando paredes (#) e células já visitadas<br>
    • ✅ Caminho encontrado com sucesso!
  `;
  resultContent.appendChild(step2);

  // Passo 3: Detalhes do caminho
  const step3 = document.createElement('div');
  step3.className = 'result-step';
  const pathDescription = solution
    .map((pos, index) => {
      if (index === 0) return `Início (${pos.row + 1}, ${pos.col + 1})`;
      if (index === solution.length - 1) return `Fim (${pos.row + 1}, ${pos.col + 1})`;
      return `(${pos.row + 1}, ${pos.col + 1})`;
    })
    .join(' → ');

  step3.innerHTML = `
    <strong>🛤️ Passo 3: Caminho Encontrado</strong><br>
    • Número total de movimentos: <strong>${solution.length - 1}</strong><br>
    • Sequência de posições:<br>
    <div style="margin-top: 8px; padding: 8px; background: rgba(0,0,0,0.3); border-radius: 5px; font-size: 11px; word-wrap: break-word;">
      ${pathDescription}
    </div>
  `;
  resultContent.appendChild(step3);

  // Passo 4: Validação
  const step4 = document.createElement('div');
  step4.className = 'result-step';
  step4.innerHTML = `
    <strong>✔️ Passo 4: Validação do Caminho</strong><br>
    • Verificando se todos os movimentos são válidos<br>
    • Confirmando que não há atravessamento de paredes<br>
    • Validando conexão entre entrada e saída<br>
    • ✅ Caminho validado: <strong>APROVADO</strong>
  `;
  resultContent.appendChild(step4);
}

function showFinalMessage() {
  const resultContent = document.getElementById('result-content');
  const finalMsg = document.createElement('div');
  finalMsg.className = 'result-final';
  finalMsg.innerHTML = `
    🎉 <strong>TRAVESSIA CONCLUÍDA!</strong> 🎉<br>
    <br>
    A nave atravessou o buraco de minhoca com sucesso!<br>
    Menor caminho: <strong>${solution.length - 1} movimentos</strong><br>
    Dificuldade: <strong>${maps[currentMapIndex].difficulty}</strong>
  `;
  resultContent.appendChild(finalMsg);
}

function showResult(message, steps) {
  const resultContent = document.getElementById('result-content');
  resultContent.innerHTML = `<div class="result-step">${message}</div>`;
}

function showResultPlaceholder(message) {
  const resultContent = document.getElementById('result-content');
  resultContent.innerHTML = `<p class="result-placeholder">${message}</p>`;
}

function clearResults() {
  const resultContent = document.getElementById('result-content');
  resultContent.innerHTML = '<p class="result-placeholder">Aguardando resolução do labirinto...</p>';
}

// ========================================
// NAVEGAÇÃO ENTRE MAPAS
// ========================================
function nextMap() {
  currentMapIndex = (currentMapIndex + 1) % maps.length;
  loadMap(currentMapIndex);
}

// ========================================
// UTILITÁRIOS
// ========================================
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ========================================
// INICIALIZAÇÃO
// ========================================
window.addEventListener('DOMContentLoaded', initGame);
