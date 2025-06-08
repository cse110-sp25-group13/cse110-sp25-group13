# Hand Testing with screenshots

#### When loading cards from the database, they were hugely disproportionate to the page, and the information that was meant to be displayed on the card was not in the right place.
![oversized cards image](imgs/huge-card.png)

#### Not only were the cards disproportionate, the character images that were meant to go on the game screen were not loading. 
![missing professor and student character](imgs/characters-no-load-card-overflow.png)

#### While trying to implement a border on a card on hover, the border showed up inside the card boundaries. Plus, the icons did not load (which is the only readon we could see this border).
![phantom yellow rectangle inside card border with no icon](imgs/phantom-yellow-no-load.png)

#### Generally, the icons meant to show up on the card were not loading, and we could see image-error icons right at the top of the card. 
![card with missing icon image](imgs/card-icon-no-load.png)

#### We got the cards to fit better to the screen, but they were still too long and the icon pictures were squished into their slots. 
![tall thin cards with overflowing text and squeezed contents](imgs/card-squeeze-proportions-off.png)

#### Icon images are not squeezed, but text still overflows from the cards.
![proportional cards with rarity rankings overflowing](imgs/overflow-card-text.png)
