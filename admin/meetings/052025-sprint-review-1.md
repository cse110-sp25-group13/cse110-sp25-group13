## Sprint review 1 

### Attendees: Katy, Zhenyu, Pranay, Nick, Zack, Destin, Jaylynne, Haoting, Chencheng, Chungyin, Ryan

### Important note: Due to some initial timeline confusion and scheduling conflicts, Sprint 1 ran from Tuesday-Tuesday. We are doing our best to get back on timeline but were under the impression that there was more flexibility in sprint timelines. This will remedied moving forward.

### Completed work: We completed demos from each team. Each team shared their screen and gave a "tour" of the work they had completed.

#### Game pages: 
- `game-page.html` has some structure but no functionality and the formatting is off. There are some other pages with progress on them but not pushed to the respective branch.
- Some simple CSS but needs to be cleaned up and cover more of the HTML elements.

### Game logic: 
- UI elements are collected by `document.querySelector`
- Functions for: `initGame()`, `drawCards(count, ai)`, `renderHands()`, `playRound(playercardId)`, `determineWinner(playerCard, aiCard)`, `animateCardmove(card, targetEl)`, `updateScore(winner, playerCard, aiCard)`, `checkWinCondition()`, `endGame(winner)`, `resetTimer()`
- JSDoc comments are formated correctly
- Clean, organized code

### Custom card element, database logic 
- `card-system.js` is developed with a few example cards (`json` format)
  - With the following functions: `initDB()`, `getAllCards()`, `getCardById()`
  - JSDoc comments are added
- `card` directory is created and contains `card-back.png`, `card-front.webp`, `card-structure-template.html`, `demo.html`, and `triton-card.js`
- TritonCard is a custom web component representing a card with front and back
- No collection page

### Feedback: 
- Discuss what "doneness" means further. Doneness means:
  - clean, correctly documented code
  - complete tasks (subtasks, if previously defined, are okay)
  - PR with review request and forethought about merge conflicts
- HTML structure needs to be more developed -- cleaner elements and design. Can be simple but needs to be well-formatted.

Onto the retrospective. 
