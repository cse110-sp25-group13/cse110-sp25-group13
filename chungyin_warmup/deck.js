const SUITS = ['H', 'D', 'C', 'S'];
const RANKS = ['A','2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

export default class Deck {
  constructor(cards = freshDeck()) {
    this.cards = cards; // The original cards in a deck
  }
  
  get length(){
      return this.cards.length;
  }
  
  draw(face ="up"){
    let card = this.cards.pop();
    card.face = face;
    return card;
  }

  peek(i){
    return this.cards.at(i).label;
  }
  // Fisher-Yates shuffle (GPT)
  shuffle(){
    for(let i = this.length - 1; i > 0; --i){
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  reset(cards = freshDeck()){
    this.cards = cards;
  }

  [Symbol.iterator]() {
    let index = 0;
    const cards = this.cards;
    return {
      next() {
        if (index < cards.length) {
          return { value: cards[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
}

class PlayingCard{
  #face;
  #rank;
  #suit;
  constructor(suit, rank, face="up"){
    this.#suit = suit;
    this.#rank = rank;
    this.#face = face;
  }
  get rank(){
    return this.#rank;
  }

  get suit(){
    return this.#suit;
  }
  
  get label(){
    return this.toString();
  }
  get value(){
    switch(this.#rank){
      case "A": 
        return 11;
      case "K":
      case "Q":
      case "J":
        return 10;
      default: return parseInt(this.#rank);
    }
  }
  toString(){
    if(this.#face == "up")
      return this.#rank + this.#suit;
    else return "Down"
  }

  set face(f){
    this.#face = f;
  }

  
}

function freshDeck(){
  return SUITS.flatMap(suit=>{
    return RANKS.map(rank=>
      (new PlayingCard(suit, rank))
    )
  })
}
