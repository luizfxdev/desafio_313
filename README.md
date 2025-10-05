# 🚀 A Travessia do Buraco de Minhoca

Um jogo interativo de labirintos espaciais onde você deve guiar uma nave através de buracos de minhoca interdimensionais, escapando de dimensões distorcidas onde as leis da física mudam constantemente.

![Game Theme](https://img.shields.io/badge/Theme-Galactic%20Maze-purple?style=for-the-badge)
![Difficulty](https://img.shields.io/badge/Maps-5%20Levels-green?style=for-the-badge)
![Algorithm](https://img.shields.io/badge/Algorithm-BFS-blue?style=for-the-badge)

---

## 📋 Índice

- [Sobre o Jogo](#-sobre-o-jogo)
- [Características](#-características)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Instalação](#-instalação)
- [Como Jogar](#-como-jogar)
- [Mapas Disponíveis](#-mapas-disponíveis)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Algoritmo](#-algoritmo)
- [Personalização](#-personalização)

---

## 🌌 Sobre o Jogo

Um viajante intergaláctico, atraído pelo brilho hipnotizante de um buraco de minhoca nas profundezas do cosmo, precisa escapar de um labirinto espacial de dimensões distorcidas. Neste mosaico de energia e matéria, o menor erro pode prender o astronauta por toda a eternidade em fendas temporais desconhecidas!

### Objetivo

Navegue pelos 5 labirintos espaciais, encontrando o menor caminho da entrada (🚀) até a saída (🌀), evitando paredes de matéria densa e atravessando caminhos livres entre buracos negros e nebulosas.

---

## ✨ Características

### 🎮 Modos de Jogo

- **Modo Manual**: Controle a nave usando as setas direcionais (⬅⬆⬇➡) ou teclado
- **Modo Automático**: Assista a solução animada com o menor caminho calculado

### 🗺️ Níveis de Dificuldade

- **Fácil** (1 mapa): Labirintos simples para iniciantes
- **Médio** (1 mapa): Desafios intermediários
- **Difícil** (2 mapas): Labirintos complexos
- **Muito Difícil** (1 mapa): O desafio final interdimensional

### 📊 Sistema de Análise

Cada resolução automática fornece:
- Análise inicial do labirinto
- Processo de busca detalhado
- Sequência completa do caminho
- Validação e número total de movimentos

### 🎨 Visual

- Design galáctico/cyberpunk com cores neon
- Animações suaves CSS
- Efeitos glow em paredes e portais
- Background em vídeo imersivo
- Interface responsiva

---

## 📁 Estrutura do Projeto

```
A-Travessia-do-Buraco-de-Minhoca/
│
├── index.html          # Estrutura principal do jogo
├── styles.css          # Estilos e animações
├── script.js           # Lógica do jogo e algoritmo BFS
├── README.md           # Documentação (este arquivo)
│
└── assets/
    ├── background.mp4  # Vídeo de fundo (3840x2160)
    └── theme.mp3       # Música tema do jogo
```

---

## 🚀 Instalação

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Servidor local (opcional, mas recomendado)

### Passo a Passo

1. **Clone ou baixe o projeto**

```bash
git clone https://github.com/seu-usuario/travessia-buraco-minhoca.git
cd travessia-buraco-minhoca
```

2. **Adicione os assets**

Crie a pasta `assets` e adicione:
- `background.mp4` - Vídeo de fundo espacial (dimensões: 3840x2160)
- `theme.mp3` - Música tema do jogo

3. **Execute o projeto**

**Opção A - Com servidor local (recomendado):**

```bash
# Usando Python 3
python -m http.server 5500

# Usando Node.js (http-server)
npx http-server -p 5500

# Usando PHP
php -S localhost:5500
```

Acesse: `http://localhost:5500`

**Opção B - Diretamente:**
Abra o arquivo `index.html` no navegador

---

## 🎮 Como Jogar

### Controles

#### Modo Manual
- **Setas na tela**: ⬅ ⬆ ⬇ ➡
- **Teclado**: Setas direcionais
- Mova a nave (🚀) até a saída (🌀)

#### Controles de Áudio
- **🎵** - Tocar música tema
- **⏸️** - Pausar música

#### Botões de Ação
- **Resolver Automaticamente** - Calcula e anima o menor caminho
- **Próximo Mapa** - Avança para o próximo labirinto

### Elementos do Labirinto

| Símbolo | Descrição |
|---------|-----------|
| 🚀 | **Entrada** - Ponto inicial da nave |
| 🌀 | **Saída** - Portal para o universo seguro |
| 🟪 | **Caminho Livre** - Rota navegável |
| 🟣 | **Parede** - Matéria densa intransponível |
| 🔵 | **Solução** - Caminho calculado (modo automático) |

### Dicas

1. Observe o layout completo antes de se mover
2. Use o modo automático para aprender a solução ideal
3. No modo manual, planeje seus movimentos antecipadamente
4. Cada mapa tem apenas um caminho ótimo

---

## 🗺️ Mapas Disponíveis

### 1️⃣ Distorção da Nebulosa
- **Dificuldade**: Fácil
- **Dimensões**: 5x5
- **Descrição**: Um labirinto simples nas bordas do universo conhecido

### 2️⃣ Vórtice dos Ecos
- **Dificuldade**: Médio
- **Dimensões**: 6x6
- **Descrição**: Dimensões entrelaçadas testam sua percepção espacial

### 3️⃣ Singularidade Temporal
- **Dificuldade**: Difícil
- **Dimensões**: 7x7
- **Descrição**: O tempo se curva ao seu redor neste labirinto complexo

### 4️⃣ Fenda Quântica
- **Dificuldade**: Difícil
- **Dimensões**: 8x8
- **Descrição**: Múltiplas realidades colidem neste espaço caótico

### 5️⃣ Abismo Cósmico Infinito
- **Dificuldade**: Muito Difícil
- **Dimensões**: 9x9
- **Descrição**: O desafio final além de todas as dimensões conhecidas

---

## 💻 Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilos e animações
  - Flexbox/Grid para layout responsivo
  - Animações CSS para movimento da nave
  - Efeitos glow com gradientes
- **JavaScript (ES6+)** - Lógica do jogo
  - Algoritmo BFS (Busca em Largura)
  - Manipulação do DOM
  - Sistema de eventos

### Assets
- **Vídeo Background**: MP4 (3840x2160)
- **Áudio**: MP3 (música tema)

---

## 🧮 Algoritmo

### BFS (Breadth-First Search)

O jogo utiliza o algoritmo de **Busca em Largura** para encontrar o menor caminho:

```javascript
function findPath() {
    // 1. Inicializa fila com posição inicial
    // 2. Marca células visitadas
    // 3. Explora células adjacentes (cima, baixo, esquerda, direita)
    // 4. Ignora paredes e células visitadas
    // 5. Continua até encontrar a saída
    // 6. Reconstrói o caminho percorrido
}
```

### Características do Algoritmo

- ✅ **Garante o menor caminho** (em número de movimentos)
- ✅ **Complexidade**: O(n × m) onde n e m são dimensões da matriz
- ✅ **Movimentos**: 4 direções (cima, baixo, esquerda, direita)
- ✅ **Otimizado** para matrizes pequenas/médias

### Passos da Análise

1. **Análise Inicial**: Dimensões, posições de entrada/saída
2. **Processo de Busca**: Exploração BFS, células visitadas
3. **Caminho Encontrado**: Sequência de coordenadas
4. **Validação**: Verificação de movimentos válidos

---

## 🎨 Personalização

### Adicionar Novos Mapas

Edite `script.js` e adicione ao array `maps`:

```javascript
{
    name: "Seu Nome do Mapa",
    description: "Descrição do desafio",
    difficulty: "Fácil|Médio|Difícil|Muito Difícil",
    grid: [
        ['E', ' ', '#', ' '],
        [' ', '#', ' ', ' '],
        [' ', ' ', '#', ' '],
        [' ', ' ', ' ', 'S']
    ]
}
```

### Alterar Cores

Edite `styles.css`:

```css
/* Cores principais */
--color-entrance: #00ff55;    /* Entrada */
--color-exit: #ff00ff;        /* Saída */
--color-wall: #8800ff;        /* Paredes */
--color-path: #00ffff;        /* Caminho solução */
--color-player: #ffff00;      /* Jogador */
```

### Modificar Animações

Ajuste a velocidade em `script.js`:

```javascript
// Velocidade da animação automática (em milissegundos)
await sleep(300); // Altere este valor
```

---

## 📱 Responsividade

O jogo se adapta automaticamente a diferentes tamanhos de tela:

- **Desktop** (> 768px): Container fixo à esquerda
- **Tablet** (768px): Container centralizado
- **Mobile** (< 480px): Layout otimizado, botões empilhados

---

## 🐛 Solução de Problemas

### Vídeo não aparece
- Verifique se `background.mp4` está em `assets/`
- Confirme que o vídeo tem dimensões 3840x2160
- Teste em navegador compatível com HTML5 video

### Áudio não toca
- Alguns navegadores bloqueiam autoplay de áudio
- Clique no botão 🎵 para iniciar manualmente
- Verifique se `theme.mp3` está em `assets/`

### Labirinto não renderiza
- Abra o Console (F12) e verifique erros
- Confirme que `script.js` está sendo carregado
- Verifique se há erros de JavaScript

---

## 📄 Licença

Este projeto é livre para uso educacional e pessoal.

---

## 👨‍💻 Autor

Desenvolvido como um desafio de programação interativo.

---

## 🌟 Próximas Melhorias

- [ ] Sistema de pontuação
- [ ] Timer para cada mapa
- [ ] Ranking de melhores tempos
- [ ] Editor de mapas customizados
- [ ] Multiplayer local
- [ ] Mais efeitos visuais e partículas
- [ ] Sons de movimento e vitória
- [ ] Modo história com narrativa

---

## 🙏 Agradecimentos

Inspirado pelos mistérios do universo e pela fascinação com buracos de minhoca e viagens interdimensionais.

---

**Boa sorte na travessia! Que as estrelas guiem seu caminho! 🚀✨🌌**
