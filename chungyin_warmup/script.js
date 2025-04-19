import Deck from "./deck.js";
// Starting Game
class Game21{
  constructor(){
    this.reset();
    this.render();

  }
  
  // Required action
  reset() {
    this.#deck = new Deck();
    this.#player_hands = [];
    this.#cpu_hands = [];

    this.#deck.shuffle();
    
    this.#cpu_draw("down");
    this.#cpu_draw("up");

    this.player_draw();
    this.player_draw();
    this.render();
  }

  shuffle(){
    this.#deck.shuffle();
    this.#render_deck();
  }

  player_draw(face="up"){
    if(this.#deck.length != 0){
      const card = this.#deck.draw(face)
      this.#player_hands.push(card);
    }
    else alert("Deck is empty!");

    // render 
    this.#render_player();
    console.log("Player total card value : " + this.player_cardvalue)

  }


  // Player action
  
  hit(){
    if(this.busted){
      alert("You already BUSTED!");return;
    }
    this.player_draw();
    if(this.busted) alert("You are BUSTED!");
  }

  stay(){
    this.#cpu_hands[0].face = "up";
    while(this.cpu_cardvalue <= 15){
      this.#cpu_draw("up");
    }
    this.#render_computer();

    if(this.gameover){
      alert("you lost")
    }
    else alert("you won")
  }

  #deck;
  #player_hands;
  #cpu_hands;
  
  //Inner game state

  get gameover(){
    return this.busted || this.cpukills;
  }

  get cpukills(){
    return (this.cpu_cardvalue >= this.player_cardvalue &&  this.cpu_cardvalue <= 21);
  }

  get busted(){
    return this.player_cardvalue > 21;
  }

  get player_cardvalue(){
    let sum = 0;
    let acount = 0;
    for(const card of this.#player_hands){
      if(card.rank == "A") acount += 1;
      else sum += card.value;
    }
    if (acount > 0)
      for(let i = 0; i < acount; ++i){
        if(sum + 11 > 21)sum += 1;
        else sum += 11;
      }
    return sum;
  }

  get cpu_cardvalue(){
    let sum = 0;
    let acount = 0;

    for(const card of this.#cpu_hands){
      if(card.rank == "A") acount += 1;
      else sum += card.value;
    }

    if (acount > 0){
      for(let i = 0; i < acount; ++i){
        if(sum + 11 > 21)sum += 1;
        else sum += 11;
      }
    }
    return sum;
  }

  #cpu_draw(face="down"){
    if(this.#deck.length != 0) {
      const card = this.#deck.draw(face)
      this.#cpu_hands.push(card);
    }
    else alert("Deck is empty!");
    this.render();
    console.log("CPU total card value : " + this.cpu_cardvalue)
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
// Always Listening
document.getElementById("draw-btn").onclick = ()=> game.player_draw();
document.getElementById("shuffle-btn").onclick = ()=> game.shuffle();
document.getElementById("reset-btn").onclick = ()=> game.reset();
document.getElementById("hit-btn").onclick = ()=> game.hit();
document.getElementById("stay-btn").onclick = ()=> game.stay();