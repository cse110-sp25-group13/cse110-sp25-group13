# Sprint Review 3 (6/01/2025)

### Present:
Katy, Zhenyu, Pranay, Nick, Haoting

## Demo of develop 
### What works:
- Cards populate, loaded from our `json` of all the cards, correctly. You can choose a card to play, and it will go to the correct spot.
- Once you play a card, the game logic works correctly and you either win or lose compared to the AI! It will use the card hierarchy and value to do this.
- There is a functioning timer that will reset. Also when the timer runs down, a card will get played automatically.
- Card counts based on wins (top corners) update correctly.
- Winning logic is correct (correctly detects winning state) and popup happens correctly notifying the user.

## Some other fun demos: 
- Jaylynne showed off the winning popup she made with confetti animations, we just need to link this to the logic
- Nick showed the fix that Ryan worked on that resized some of the cards

## Going through the github issues and update project boards if needed (some noteable points, not necessarily all):
### Page structure team:
- In progress: getting win/lose pop up impelemented with game logic
- Done: include fun backgrounds and improve the format of the page
- Done: lots of time spent formatting, improving structure, etc, merge conflicts, etc.

### Game logic team: 
- Done: integrate logic with HTML
- Done: fix and synchronize game timer
- Done: correct AI slot behavior (when you click a card it's supposed to get played and the AI is supposed to go to its slot)
- Done: winning condition triggers alert

### Card team notable tasks: 
- Done: change the fixed CSS card sizes to be responsive/dynamic (in `triton-card.js` embedded CSS variable `--card-width`)
- Done: use absolute paths for images
- Done: move all images into a single organized folder
- In progress: resize card images (Ryan in progress)
- Randomize list: didn't use List.randomize(). How exactly to ppopulate user deck? Nick currently has implemented pulling the ids into an array and then using random index.

### CI pipeline/Testing:
- Done: Github pages deployment from develop branch
- Done: Puppeteer e2d tests for `game-page.html`
- Done but not in use currently: tests for localStorage
- Ready in a PR: Inline CSS and JS part of pipeline
- Done: Pranay helps with many merge conflicts

## Feedback 
- Confusion about LocalStorage and IndexDB, previously had discussed using LocalStorage to hold the user's current cards. Feedback: testing should communicate with the team that they're testing. Discuss IndexDB vs LocalStorage.
- Code needs to be cleaner overall -- mix speed and intention when putting code on the page. Referencing an LLM is okay; but we can't just blindly be pasting. This is building a huge "tech debt".
- Please, keep your local branches up to date and communicate if a problem comes up. Branching issues can be solved much easier when there is communication.
