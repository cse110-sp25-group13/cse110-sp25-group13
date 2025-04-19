import Deck from "./deck.js";
// Starting Game
class Game21{
  #deck;
  #player_hands;
  #cpu_hands;

  constructor(){
    this.#deck = new Deck();
    this.#player_hands = [];
    this.#cpu_hands = [];
    this.render();
  }
  
  reset() {
    this.#deck.reset();
    this.#player_hands = [];
    this.#cpu_hands = [];
  }

  // Game action
  player_draw(face="up"){
    const card = this.#deck.draw(face);
    // console.log(card.label)
    if(this.#deck.length != 0) this.#player_hands.push(card);
    else alert("Deck is empty!");
    this.render();
  }
  #cpu_draw(face="down"){
    if(this.#deck.length != 0) this.#cpu_hands.push(this.#deck.draw(face));
    else alert("Deck is empty!");
  }

  // Render Function:
  render(){
    this.#render_player();
    this.#render_deck();
    this.#render_computer();
  }

  #render_player(){
    const playerHand = document.getElementById("player-hands");
    playerHand.innerHTML = "";

    for(const card of this.#player_hands){
      let cardElement = document.createElement("div")
      cardElement.className = "card";
      cardElement.textContent = card;
      playerHand.appendChild(cardElement);
    }

    if(this.#player_hands.length == 0) playerHand.textContent = "Click Draw to get a new card"
  }
  #render_computer(){
    const compHand = document.getElementById("computer-hands")
    compHand.innerHTML = ""
    for(const card of this.#cpu_hands){
      let cardElement = document.createElement("div")
      cardElement.className = "card";
      cardElement.textContent = card;
      compHand.appendChild(cardElement);
    }
  }
  #render_deck(){
    // rerender the deck
    const deck_area = document.getElementById("deck");
    deck_area.innerHTML = "";
    for(const card of this.#deck){
      deck_area.textContent = deck_area.textContent + " " + card.label;
    }
  }
}

const game = new Game21();




// Shuffle the existing deck
function shuffle(){
  deck.shuffle();
}

// Draw a card to player hands
function drawCard(){
  game.player_draw("up");
}

//Clear the player;'s hands
function clear(){
    hands_count = 0;
    const playerHand = document.getElementById("player-hands");
    playerHand.innerHTML = "";

    // Optionally log
    console.log("Player Hand is cleared.");
}

// Game logic Function End

// Always Listening
document.getElementById("draw-btn").addEventListener("click", drawCard);
document.getElementById("shuffle-btn").addEventListener("click", shuffle);
document.getElementById("reset-btn").addEventListener("click", reset);