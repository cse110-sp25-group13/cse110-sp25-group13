const nPairs = 8;
const emojisPool = ['🍎','🍌','🍇','🍓','🍑','🍍','🥝','🍉','🍒','🍋','🍊','🥭','🍐','🥥','🥑','🍈'];
let deck = [];
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function initGame() {
  const selected = shuffle([...emojisPool]).slice(0, nPairs);
  deck = shuffle([...selected, ...selected]);

  firstCard = null;
  secondCard = null;
  lockBoard = false;
  moves = 0;
  document.getElementById('moves').textContent = `Moves: ${moves}`;

  const game = document.getElementById('game');
  game.innerHTML = '';
  deck.forEach((emoji, idx) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.index = idx;
    card.addEventListener('click', onCardClick);
    game.appendChild(card);
  });
}

function onCardClick() {
  if (lockBoard) return;
  if (this === firstCard) return;

  const idx = this.dataset.index;
  this.textContent = deck[idx];
  this.classList.add('flipped');

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  moves++;
  document.getElementById('moves').textContent = `Moves: ${moves}`;
  lockBoard = true;

  if (firstCard.textContent === secondCard.textContent) {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    resetTurn();
    if (document.querySelectorAll('.matched').length === deck.length) {
      setTimeout(() => alert(`🎉 You found all ${nPairs} pairs in ${moves} moves!`), 100);
    }
  } else {
    setTimeout(() => {
      firstCard.textContent = '';
      secondCard.textContent = '';
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');
      resetTurn();
    }, 1000);
  }
}

function resetTurn() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}

document.getElementById('restart').addEventListener('click', initGame);

// Start the game on load
initGame();
