# 🌌 A Travessia do Buraco de Minhoca

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Completo-success?style=for-the-badge)

Um jogo interativo de labirinto espacial com resolução automática de caminhos usando BFS

---

## 📋 Sobre o Projeto

A Travessia do Buraco de Minhoca é um jogo interativo onde você controla uma nave espacial que precisa escapar de labirintos interdimensionais. O jogo apresenta 5 mapas diferentes com níveis crescentes de dificuldade.

### 🎯 Conceito

Um viajante intergaláctico, atraído pelo brilho hipnotizante de um buraco de minhoca nas profundezas do cosmo, precisa escapar de um labirinto espacial de dimensões distorcidas onde as leis da física parecem mudar a cada instante.

---

## ✨ Características

### 🎮 Funcionalidades Principais

**5 Mapas Únicos:**
- 🟢 Distorção da Nebulosa (Fácil)
- 🟡 Vórtice dos Ecos (Médio)
- 🟠 Singularidade Temporal (Difícil)
- 🔴 Fenda Quântica (Difícil)
- 🔥 Abismo Cósmico Infinito (Muito Difícil)

**Dois Modos de Jogo:**
- 🕹️ Manual: Use as setas direcionais ou teclado para navegar
- 🤖 Automático: Algoritmo BFS encontra e anima o menor caminho

**Análise Detalhada:**
- 📍 Análise inicial do labirinto
- 🔍 Processo de busca
- 🛤️ Caminho encontrado
- ✔️ Validação do resultado

### 🎨 Visual e UX

- 🌠 Tema Galáctico/Futurista com cores neon
- ✨ Animações Suaves CSS
- 💫 Efeitos Visuais (glow, pulsante, neon)
- 🎵 Controles de Áudio
- 📹 Vídeo de Fundo 4K (3840x2160)
- 📱 Design Responsivo

---

## 🚀 Instalação

### Pré-requisitos

- Navegador web moderno
- Servidor local (opcional)

### Passo a Passo

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/travessia-buraco-minhoca.git
cd travessia-buraco-minhoca
```

2. Estrutura de arquivos:

```
travessia-buraco-minhoca/
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── background.mp4
    └── theme.mp3
```

3. Adicione os arquivos de mídia na pasta assets/

4. Execute o projeto:

```bash
# Python 3
python -m http.server 5500

# Node.js
npx http-server -p 5500

# PHP
php -S localhost:5500
```

Acesse: http://localhost:5500

---

## 📖 Como Jogar

### 🎮 Controles Manuais

- Setas na tela ou teclado
- Objetivo: Mover a nave 🚀 da entrada (E) até a saída (S) 🌀
- Não pode atravessar paredes (#)

### 🤖 Resolução Automática

1. Clique em "Resolver Automaticamente"
2. O algoritmo BFS calcula o menor caminho
3. Animação mostra a solução
4. Análise detalhada é exibida

### 🗺️ Navegação

- Clique em "Próximo Mapa" para avançar
- 5 mapas em rotação contínua

### 🎵 Controles de Áudio

- 🎵 Iniciar música
- ⏸️ Pausar música

---

## 🛠️ Tecnologias

**Core:**
- HTML5
- CSS3
- JavaScript (ES6+)

**Algoritmos:**
- BFS (Breadth-First Search)
- Sistema de Grid Dinâmico
- Animação Frame-by-Frame

**Recursos:**
- Flexbox & Grid CSS
- Async/Await
- Event Listeners
- DOM Manipulation

---

## 📁 Estrutura do Código

**index.html** - Container principal do jogo

**styles.css** - Estilos completos com tema espacial

**script.js** - Lógica do jogo:
- 5 labirintos pré-configurados
- Renderização dinâmica do grid
- Algoritmo BFS
- Sistema de animação
- Controles de movimentação
- Análise detalhada

---

## 🎨 Paleta de Cores

- 🟢 Verde Neon #00ff55 - Entrada, bordas
- 🔵 Azul Ciano #00ffff - Resultados
- 🟣 Roxo #8800ff - Paredes
- 🟡 Amarelo #ffff00 - Jogador/nave
- 🔴 Magenta #ff00ff - Saída
- ⚫ Preto #000000 - Background

---

## 🌟 Destaques Técnicos

**Algoritmo BFS Otimizado**
- Complexidade O(n×m)
- Garante o caminho mais curto

**Animação Suave**
- 300ms entre movimentos
- Visualização clara

**Grid Responsivo**
- 35px em desktop
- 24px em mobile

---

## 📱 Responsividade

- ✅ Desktop (1920x1080+)
- ✅ Laptop (1366x768)
- ✅ Tablet (768px)
- ✅ Mobile (480px)

---

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (git checkout -b feature/NovaFeature)
3. Commit suas mudanças (git commit -m 'Adiciona nova feature')
4. Push para a branch (git push origin feature/NovaFeature)
5. Abra um Pull Request

**Ideias:**
- 🆕 Novos mapas
- 🎨 Temas alternativos
- 🏆 Sistema de pontuação
- 💾 Salvamento de progresso
- 🎯 Modo desafio
- 🌐 Internacionalização

---

## 📄 Licença

Este projeto está sob a licença MIT.

---

## 👨‍💻 Autor

**Seu Nome**

- GitHub: @seu-usuario
- LinkedIn: Seu Nome
- Email: seu.email@exemplo.com

---

## 🙏 Agradecimentos

- Inspirado em clássicos jogos de labirinto
- Design baseado em ficção científica
- Comunidade open source

---

### ⭐ Se você gostou deste projeto, deixe uma estrela!

**Feito com 💜 e muito ☕**
