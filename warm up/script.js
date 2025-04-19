class MemoryCard extends HTMLElement {
    constructor() {
      super();
      this.addEventListener('click', () => this.dispatchEvent(new CustomEvent('card-flip', { bubbles: true })));
    }
  }
  customElements.define('memory-card', MemoryCard);
  
  class MemoryBoard extends HTMLElement {
    constructor() {
      super();
      this.firstCard = null;
      this.secondCard = null;
      this.lockBoard = false;
      this.stateKey = 'memoryGameState';
    }
    connectedCallback() {
      this.nPairs = parseInt(this.getAttribute('n-pairs')) || 8;
      this.cols = parseInt(this.getAttribute('cols')) || 4;
      this.style.setProperty('--cols', this.cols);
      this.loadState();
      this.render();
      this.addEventListener('card-flip', e => this.onCardFlip(e));
      document.getElementById('restart').addEventListener('click', () => this.onRestart());
    }
    loadState() {
      const saved = localStorage.getItem(this.stateKey);
      if (saved) {
        this.state = JSON.parse(saved);
      } else {
        this.initState();
      }
      this.moves = this.state.moves;
    }
    initState() {
      const pool = ['🍎','🍌','🍇','🍓','🍑','🍍','🥝','🍉',
                    '🍒','🍋','🍊','🥭','🍐','🥥','🥑','🍈'];
      const selected = this.shuffle(pool).slice(0, this.nPairs);
      const deck = this.shuffle([...selected, ...selected]);
      this.state = { deck, found: [], moves: 0 };
      this.saveState();
    }
    saveState() {
      localStorage.setItem(this.stateKey, JSON.stringify(this.state));
    }
    render() {
      this.innerHTML = '';
      this.state.deck.forEach((emoji, idx) => {
        const card = document.createElement('memory-card');
        card.dataset.index = idx;
        if (this.state.found.includes(idx)) {
          card.textContent = emoji;
          card.setAttribute('matched', '');
        }
        this.appendChild(card);
      });
      document.dispatchEvent(new CustomEvent('movesUpdated', { detail: this.state.moves }));
    }
    onCardFlip(e) {
      const cardElem = e.target;
      const idx = Number(cardElem.dataset.index);
      if (this.lockBoard || cardElem.hasAttribute('matched') || cardElem.hasAttribute('flipped')) return;
      cardElem.textContent = this.state.deck[idx];
      cardElem.setAttribute('flipped', '');
      if (!this.firstCard) {
        this.firstCard = cardElem;
        return;
      }
      this.secondCard = cardElem;
      this.moves++;
      this.state.moves = this.moves;
      this.saveState();
      document.dispatchEvent(new CustomEvent('movesUpdated', { detail: this.moves }));
      this.lockBoard = true;
      const i1 = Number(this.firstCard.dataset.index);
      const i2 = idx;
      if (this.firstCard.textContent === this.secondCard.textContent) {
        this.firstCard.setAttribute('matched', '');
        this.secondCard.setAttribute('matched', '');
        this.state.found.push(i1, i2);
        this.saveState();
        this.resetTurn();
        if (this.state.found.length === this.state.deck.length) {
          setTimeout(() => alert(`🎉 You found all ${this.nPairs} pairs in ${this.moves} moves!`), 100);
        }
      } else {
        setTimeout(() => {
          this.firstCard.textContent = '';
          this.secondCard.textContent = '';
          this.firstCard.removeAttribute('flipped');
          this.secondCard.removeAttribute('flipped');
          this.resetTurn();
        }, 1000);
      }
    }
    resetTurn() {
      [this.firstCard, this.secondCard] = [null, null];
      this.lockBoard = false;
    }
    onRestart() {
      localStorage.removeItem(this.stateKey);
      this.loadState();
      this.render();
    }
    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
  }
  customElements.define('memory-board', MemoryBoard);
  
  document.addEventListener('movesUpdated', e => {
    document.getElementById('moves').textContent = `Moves: ${e.detail}`;
  });
  