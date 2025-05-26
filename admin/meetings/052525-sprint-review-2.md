## Sprint review 1 

### Attendees: Katy, Zhenyu, Pranay, Nick, Zack, Jaylynne, Haoting, Chencheng, Chungyin, Ryan, Darwin

### Important note: Due to some initial timeline confusion and scheduling conflicts, Sprint 1 ran from Tuesday-Tuesday. For this sprint, we set an accelerated timeline in order to get back on track. 

### Completed work: We completed demos from each team. Each team shared their screen and gave a "tour" of the work they had completed. We also used a `miro` board to go over what we accomplished, technical barriers, technical feedback for other teams, future things to work on. You can find this `miro` board in our `meetings` folder.

### Game pages: 
- `game-page.html` has a greatly improved design, with themed drawing and well-placed html elements.
- `home-page.html` also has greatly improved design, with a themed drawing and a navigation bar (somewhat functional).
- Lots of time has been spent on formatting with CSS and HTML. Work still needs to be done integrating this format and design with actual functionality.
- Fantastic drawings, UCSD and Raccoon themed. 

### Game logic: 
- UI elements are collected by `document.querySelector`
- Functions for: `initGame()`, `drawCards(count, ai)`, `renderHands()`, `playRound(playercardId)`, `determineWinner(playerCard, aiCard)`, `animateCardmove(card, targetEl)`, `updateScore(winner, playerCard, aiCard)`, `checkWinCondition()`, `endGame(winner)`, `resetTimer()`
- JSDoc comments are formated correctly
- Clean, organized code
- Some tests written, but still in progress
- Still need to fully integrate with other teams, but there is some use of the database for a demo.
- Card drawing from the card `indexDB`, implementation of the timer and its functionality, as well as winning functionality.

### Custom card element, database logic 
- `card-system.js` is developed with a few example cards (`json` format)
  - With the following functions: `initDB()`, `getAllCards()`, `getCardById()`
  - JSDoc comments are added
- `card` directory is created and contains `card-back.png`, `card-front.webp`, `card-structure-template.html`, `demo.html`, and `triton-card.js`
- TritonCard is a custom web component representing a card with front and back
- No collection page (still). We are discussing if this is needed, or if we need to adjust the MVP. 
- `json` file with all 30 cards
- A card demo displaying better-designed cards with flipping functionality and a `flip all` button.
- Made the card component `<triton-card>` render with CSS.
- Difficulty: using z-index, no one is fluent in CSS.

### CI pipeline development 
- Added `Puppeteer` testing instead of Selenium.
- Detached the `JSDoc` generation workflow to be able to push to the `develop` branch. 
- Added code coverage with `jest`.
- Condensed `config` files into a `/configs` folder to clean up the repository.
- Wrote out `phase2.md` and made a video showing off our pipeline in its current state. 

### Feedback: 
- Much better communication this week. We'll get more into this for the retrospective, but increased communication between team was helpful for productivity but this can be improved in the future, too.
- Too much inline CSS and HTML. We need to clean up the code and are debating adding this to our `prettier` configuration.
- More communication is needed between teams, as these elements are dependent upon one another and changes need to be broadcasted. We are thinking of making a channel dedicated to this. 

Onto the retrospective. 
