import Deck from "./deck.js";

// Starting Game
const deck = new Deck();
let hands_count = 0;

// Game logic Function Start
function drawCard(){
  if (deck.length === 0) {
    alert("Deck is empty!");
    return;
  }
  if(hands_count === 0 || hands_count === 5){
    clear()
  }
  hands_count++;
  let card = deck.draw; // Remove one card from the topconst card = deck.pop(); // Remove one card from the top
  let cardElement = document.createElement("div")
  cardElement.className = "card";
  cardElement.textContent = card;

  const playerHand = document.getElementById("player-hands");
  playerHand.appendChild(cardElement);
}
function clear(){
    // Clear the player's hand
    hands_count = 0;
    const playerHand = document.getElementById("player-hands");
    playerHand.innerHTML = "";

    // Optionally log
    console.log("Player Hand is cleared.");
}

// Game logic Function End

// Always Listening
document.getElementById("draw-btn").addEventListener("click", drawCard);
document.getElementById("draw-btn").addEventListener("click", deck.shuffle);
document.getElementById("reset-btn").addEventListener("click", deck.reset);