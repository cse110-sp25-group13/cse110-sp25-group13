const SUITS = ['H', 'D', 'C', 'S'];
const RANKS = ['A','2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

export default class Deck {
  constructor(cards = freshDeck()) {
    this.cards = cards; // The original cards in a deck
  }
  
  get length(){
      return this.cards.length;
  }

  get draw(){
    return this.cards.pop().label;
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
}

class PlayingCard{
  constructor(suit, rank){
    this.suit = suit;
    this.rank = rank;
  }

  get label(){
    return this.rank + this.suit;
  }
}

function freshDeck(){
  return SUITS.flatMap(suit=>{
    return RANKS.map(rank=>
      (new PlayingCard(suit, rank))
    )
  })
}
