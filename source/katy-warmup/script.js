const imageList = [
    "images/cards/attack.jpg",
    "images/cards/beard.jpg",
    "images/cards/cat-henge.jpg",
    "images/cards/cattermelon.jpg",
    "images/cards/defuse.jpg",
    "images/cards/exploding-kitten.jpg",
    "images/cards/harry-potato-cat.jpg",
    "images/cards/kit-tea-cat.jpg",
    "images/cards/nope.jpg",
    "images/cards/rainbow-ralphing-cat.jpg",
    "images/cards/see-future.jpg",
    "images/cards/shuffle.jpg",
    "images/cards/skip.jpg",
    "images/cards/vampire-cat.jpg",
]
const card = document.querySelector(".card");
const cardBackImg = document.getElementById("card-back-img");
const estimatedTodSpan = document.getElementById("estimated-tod");
const flipCountDisplay = document.getElementById("flip-count");
const form = document.getElementById("tod-form");

let flipCount = 0;
let estimatedTOD = null;

document.getElementById("tod-form").addEventListener("submit", function(event) {
    event.preventDefault();
    estimatedTOD = parseInt(document.getElementById("tod").value);
    estimatedTodSpan.textContent = estimatedTOD;
});

card.addEventListener("click", () => {
    const isFlipped = card.classList.contains("flipped");
  
    if (!isFlipped) {
      const randomImage = imageList[Math.floor(Math.random() * imageList.length)];
      cardBackImg.src = randomImage;
    }
  
    card.classList.toggle("flipped");

    if (card.classList.contains("flipped")) {
        flipCount++;
        flipCountDisplay.textContent = flipCount;
    }
});


  