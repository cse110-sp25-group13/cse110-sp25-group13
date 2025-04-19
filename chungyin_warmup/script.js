import Deck from "./deck.js";
// Starting Game

const THRESHOLD_CPU_HIT = 15

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
    this.#end = false;

    this.#deck.shuffle();
    
    this.#cpu_draw("down");
    this.#cpu_draw("up");

    this.player_draw();
    this.player_draw();
    this.render();
    document.getElementById("general-log").textContent= "Click hit to draw a card when under 21"
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
    else document.getElementById("general-log").textContent=("Deck is empty!");

    // render 
    this.#render_player();
    console.log("Player total card value : " + this.player_cardvalue)

  }


  // Player action
  
  hit(){
    if(this.#end) return;

    if(this.busted){
      document.getElementById("general-log").textContent=("You already BUSTED!");return;
    }
    this.player_draw();
    if(this.busted) document.getElementById("general-log").textContent=("You are BUSTED!");
  }

  stay(){
    this.#cpu_hands[0].face = "up";
    while(this.cpu_cardvalue <= THRESHOLD_CPU_HIT){
      this.#cpu_draw("up");
    }
    this.#render_computer();

    if(this.gameover){
      document.getElementById("general-log").textContent=("you lost")
    }
    else document.getElementById("general-log").textContent=("you won")

    this.#end = true;
  }

  #deck;
  #player_hands;
  #cpu_hands;
  #end;
  
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
      if(acount + sum < THRESHOLD_CPU_HIT)
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
    else document.getElementById("general-log").textContent=("Deck is empty!");
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