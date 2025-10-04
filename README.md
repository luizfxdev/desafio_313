# 🚀 A Travessia do Buraco de Minhoca: Uma Jornada Interdimensional 🌌

![GitHub repo size](https://img.shields.io/github/repo-size/luizfxdev/a-travessia-do-buraco-de-minhoca?style=for-the-badge&color=blueviolet)
![GitHub language count](https://img.shields.io/github/languages/count/luizfxdev/a-travessia-do-buraco-de-minhoca?style=for-the-badge&color=brightgreen)
![GitHub top language](https://img.shields.io/github/languages/top/luizfxdev/a-travessia-do-buraco-de-minhoca?style=for-the-badge&color=orange)
![GitHub last commit](https://img.shields.io/github/last-commit/luizfxdev/a-travessia-do-buraco-de-minhoca?style=for-the-badge&color=ff69b4)

---

## 🎮 Sobre o Projeto

**A Travessia do Buraco de Minhoca** é um desafiador jogo de **labirinto com temática espacial**, onde o jogador deve navegar por **mapas interdimensionais**, encontrando o **caminho mais eficiente para escapar**.  
Cada jornada leva o jogador a um novo universo visual, com trilha sonora imersiva e desafios únicos!

---

## 🌠 Tema Musical

🎵 **Música de Fundo:** “Rocket Man” — *Elton John*  
Um tributo musical que complementa perfeitamente a **atmosfera cósmica e misteriosa** do jogo.

---

## 🛠️ Desafios Técnicos Enfrentados

### 1. 🎬 Problema do Background de Vídeo
**Desafio:** Fazer o vídeo de fundo ocupar 100% da tela sem distorção.  
**Soluções Testadas:**  
- Múltiplas combinações de propriedades CSS  
- Diferentes abordagens com `position` e `object-fit`  

**Resolução Final:**
```css
#bg-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
}
