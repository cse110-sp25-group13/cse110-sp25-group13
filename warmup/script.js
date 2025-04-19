let deck = [], player = [], dealer = [], money = 100, gameOver = false;

function createDeck() {
  const suits = ['♠', '♥', '♦', '♣'];
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  deck = [];
  for (let s of suits) {
    for (let v of values) {
      deck.push({ suit: s, value: v });
    }
  }
  deck.sort(() => Math.random() - 0.5);
}

function getValue(hand) {
  let total = 0, aces = 0;
  for (let card of hand) {
    if (['J', 'Q', 'K'].includes(card.value)) total += 10;
    else if (card.value === 'A') { total += 11; aces++; }
    else total += parseInt(card.value);
  }
  while (total > 21 && aces > 0) {
    total -= 10;
    aces--;
  }
  return total;
}

function drawCard() {
  return deck.pop();
}

function updateDisplay() {
  document.getElementById('player-hand').textContent = player.map(c => c.value + c.suit).join(' ');
  document.getElementById('dealer-hand').textContent = dealer.map(c => c.value + c.suit).join(' ');
  document.getElementById('money').textContent = money;
}

function startGame() {
  createDeck();
  player = [drawCard(), drawCard()];
  dealer = [drawCard()];
  gameOver = false;
  document.getElementById('status').textContent = '';
  document.getElementById('game').style.display = 'block';
  updateDisplay();
}

function hit() {
  if (gameOver) return;
  player.push(drawCard());
  const val = getValue(player);
  updateDisplay();
  if (val > 21) {
    document.getElementById('status').textContent = 'Bust! You lose.';
    money -= 10;
    gameOver = true;
  }
}

function stand() {
  if (gameOver) return;

  let mode = document.getElementById('dealer-mode').value;
  while (true) {
    const dealerVal = getValue(dealer);
    if (mode === 'brain') {
      dealer.push(drawCard());
      break;
    }
    if (mode === 'random') {
      if (Math.random() > 0.5) dealer.push(drawCard());
      else break;
    }
    if (mode === 'smart') {
      if (dealerVal < 17) dealer.push(drawCard());
      else break;
    }
  }

  const playerVal = getValue(player);
  const dealerVal = getValue(dealer);
  let result = '';

  if (dealerVal > 21 || playerVal > dealerVal) {
    result = 'You win!';
    money += 10;
  } else if (playerVal < dealerVal) {
    result = 'Dealer wins.';
    money -= 10;
  } else {
    result = 'Push.';
  }

  document.getElementById('status').textContent = result;
  updateDisplay();
  gameOver = true;
}