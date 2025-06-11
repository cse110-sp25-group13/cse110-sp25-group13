# Onboarding guide by Team 13

## Intro
We're building a fun, UCSD-themed card game inspired by Club Penguin. Players collect cards based on UCSD dining, dorm life, and iconic campus landmarks. They’ll enter the dojo to battle the Sensei and unlock new UCSD gems.

As a developer, you’ll help bring this playful experience to life — from gameplay logic and animations to UI polish and performance. Dive into the codebase, ask questions freely, and don’t be afraid to waddle into new challenges. Let’s make something awesome together!

## File structure
```
The_club_triton/
├── .github/                # GitHub actions & issue templates
│   ├── ISSUE_TEMPLATE/
│   └── workflows/
├── __tests__/             # Unit, e2e, and browser tests
│   ├── browser/
│   ├── e2e/
│   ├── setup/
│   └── unit/
├── configs/               # ESLint, Jest, Prettier, Playwright configs
├── docs/                  # JSDoc output and markdown documentation
│   ├── scripts/
│   ├── styles/
│   └── fonts/
├── src/                   # Main source code
│   ├── assets/            # Fonts, images, icons, character art
│   ├── card/              # Card data and TritonCard component
│   ├── imgs/              # Character images (404, etc.)
│   ├── pages/             # HTML views (home, game, collection)
│   ├── scripts/           # JS logic for game and UI
│   └── styles/            # CSS for each page/component
├── .gitignore
├── package.json
├── README.md
└── jest.setup.js
```

## Documentation of our code
https://cse110-sp25-group13.github.io/The_club_triton/docs/


## 🧠 Homepage Breakdown (`home-page.html`)

This is the landing page of the app. It includes:

- A background image set via CSS.
- A dynamic navbar inserted via `load-navbar.js`.
- A **game title** with animated slide effects (`slide`, `offset-slide`).
- A **floating description box** with bounce animation (`bounce`) that explains game rules.

Key classes include:

- `.game-title`, `.game-title-offset` — use `Luckiest Guy` font with slide animations
- `.description` — instructions with bounce animation and styled white bubble
- `.instructions`, `.instructions-header` — styled with `Coming Soon` and `Luckiest Guy`

---

## 🔼 Navbar Overview (`navbar.css`)

The navbar is an absolutely positioned flex container with links to main pages.

- Background color: `#FFE375`
- Rounded bottom edges
- Logo: `navbar-logo.png`
- Responsive layout using `vh`/`vw` units
- Animates on hover (`scale` and background color shift)

Structure:

```
<nav class="navbar">
  <ul class="nav-button-container">
    <img class="navbar-logo" src="../imgs/navbar-logo.png" />
    <li class="nav-button"><a href="../pages/home-page.html">Home</a></li>
    <li class="nav-button"><a href="../pages/game-page.html">Play</a></li>
    <li class="nav-button"><a href="../pages/collection-page.html">Collection</a></li>
  </ul>
</nav>
```
## Collection page && Game page
![overview](overview.png)

### CI Pipeline (``main.yml``)
Fires on every PR and manual trigger.
- ESLint + Prettier keep the code clean.
- W3C HTML validator catches broken markup.
- Jest runs unit tests & uploads coverage.
- Puppeteer drives end-to-end tests in headless Chrome.
  
If any stage fails, the PR gets a red X. 

### JSDoc Generation (``doc.yml``)
When a PR is merged into ``develop``, the job rebuilds API docs with jsdoc, and commits the ``docs/`` folder back to the branch.

### Deploy flow (``deploy.yml``)
When a PR is merged into ``main``, the job extracts the ``docs/`` folder and flattens ``src/``, and pushes all of those files to the ``deploy`` branch.

### GitHub Pages build
After the deploy flow completes succesfully, the GitHub Pages build takes the ``deploy`` branch and deploys it.

### Post-deploy quality checks
- Lighthouse CI (``lh.yml``) audits the live site for performance, accessibility, and Progressive Web App (PWA) scores against a budget. 
- With Playwright (``playwright.yml``), we run browser smoke tests on Chrome, Firefox, and Safari against the published URL to be sure nothing broke in production.

## Retro + advice

- Heightlight of Agile
  - Iterative Development:
      - held 4 sprint, each sprint last 6 days (4 days for major issue implementation + 2 days testing/combining)
      - 1st sprint: Created custom element, basic strcture of game logic + html
      - 2nd sprint: More indepth in structring html, started CSS, finished barebone of indexDB, functional custom element
      - 3rd sprint: Basic MVP done and game is functional, addressing more CSS and added collection page to enhance user interaction
      - Last sprint: Made a lot of e2e, unit tests, minor adjustment of CSS, create final video intro, finishing up documentation
  - Cross-Functional Teams
      - Working in 3 subteam, and each team taggle their own major feature with a sub group leader in each team
          - Game page Team: Handle HTML && CSS of the homepage and gamepage
          - Card collection page Team: Set up indexDB, created custom HTML element, created draw card, flip card functions for the logic team. Set up collection page's html/js/css.
          - Game logic Team: Implement the actual game logic and make sure the logic work on the actual gamepage, helped set up the collection page.
          - All teams are communicating each other freqently to update what change they made that might affect other teams
  - Daily Stand-Ups
      - Send stand up message on Slack every 2 days with format:
        
        ```
        Stand Up [date]
        Progress: [what I did in last 2 day]
        Next step: [what will I do in the next 2 day]
        Blockers: [what chanllenge am I facing]
        Help needed: [ need help to overcame the challenges or can solo it]
        ```
  - Pre-Sprint && Sprint Review && Retrospectives
      - 45 min PreSprint before each Sprint, group leader address major feature of the week and assign members to groups
      - People who get assign to the group decide which subtask of major feature to taggle
      - 30 min Sprint Review happen when the sprint end, talking about what we did in the sprint
      - 60 min on retrospective to discuss what we done well and what we need to improve

- advice
     - Create Psychological Safety in your team
         - Start the meeting by greeting each other && some random daily chatting without go stright into task
         - Try your best(team lead) to make everyone feel comfortable to turn on their camera && people talk in equal amount of time
     - Make sure each member know what to do && what's the dealine
         - One easy way to do it just to make git issue and put a list descriptive task and assign them to people with the !!deadline!!
         - Check with people every 2 day to see their progress (as a team leader)
         - Team member should ask team leader/other team if they have question rather than assuming stuff
     - As a teammember, be accountable, only promise the thing that you can finish. If something happen, please communicate in advance.
        
