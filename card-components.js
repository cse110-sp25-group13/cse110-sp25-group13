class SongCard extends HTMLElement {
    constructor() {
      super();
      this._flipped = false;
      this._audio = null;
    }
  
    connectedCallback() {
      const audioSrc = this.getAttribute('audio-src');
      const cardNumber = this.getAttribute('card-number') || '';
      
      // Create card structure
      this.innerHTML = `
        <div class="card-face card-front">
          <div class="card-number">${cardNumber}</div>
          <div class="audio-container">
            ${audioSrc ? `
              <audio class="song-audio" loop>
                <source src="${audioSrc}" type="audio/mpeg">
                Your browser does not support the audio element.
              </audio>
              <div class="audio-controls">
                <button class="play-btn">Play</button>
              </div>
            ` : '<div class="no-audio">No audio provided</div>'}
          </div>
        </div>
        <div class="card-face card-back">
          <div class="song-info">
            <h3 class="song-title">${this.getAttribute('song') || 'Unknown Song'}</h3>
            ${this.getAttribute('album-cover') ? 
              `<img class="album-cover" src="${this.getAttribute('album-cover')}" alt="Album Cover">` : ''}
            <div class="artist-name">${this.getAttribute('artist') || 'Unknown Artist'}</div>
          </div>
        </div>
      `;
  
      // Set up audio element and controls
      if (audioSrc) {
        this._audio = this.querySelector('.song-audio');
        const playBtn = this.querySelector('.play-btn');
        
        playBtn.addEventListener('click', (e) => {
          e.stopPropagation(); // Prevent card from flipping when button is clicked
          this.togglePlay();
        });
      }
  
      // Add click listener for flip (but not within the audio controls)
      this.addEventListener('click', (e) => {
        // Don't flip if clicking on audio controls
        if (!e.target.closest('.audio-controls')) {
          this.flip();
        }
      });
    }
  
    togglePlay() {
      if (!this._audio) return;
      
      if (this._audio.paused) {
        // Stop any other playing audio first
        document.querySelectorAll('song-card audio').forEach(audio => {
          if (audio !== this._audio) {
            audio.pause();
            audio.currentTime = 0;
          }
        });
        
        this._audio.play();
        this.querySelector('.play-btn').textContent = 'Pause';
      } else {
        this._audio.pause();
        this.querySelector('.play-btn').textContent = 'Play';
      }
    }
  
    flip() {
      
      
      this._flipped = !this._flipped;
      if (this._flipped) {
        this.classList.add('flipped');
      } else {
        this.classList.remove('flipped');
      }
    }
  
    // Reset flip state and stop any playing audio when showing a new card
    resetFlip() {
      if (this._audio) {
        this._audio.pause();
        this._audio.currentTime = 0;
        this.querySelector('.play-btn').textContent = 'Play';
      }
      
      this._flipped = false;
      this.classList.remove('flipped');
    }
  }
  
  // Define the SongDeck component
  class SongDeck extends HTMLElement {
    constructor() {
      super();
      this._currentIndex = 0;
    }
  
    connectedCallback() {
      // Initially show the first card
      this.showCard(this._currentIndex);
    }
  
    get cards() {
      return Array.from(this.querySelectorAll('song-card'));
    }
  
    showCard(index) {
      const cards = this.cards;
      if (cards.length === 0) return;
  
      // Ensure index is within bounds
      if (index < 0) index = cards.length - 1;
      if (index >= cards.length) index = 0;
      
      this._currentIndex = index;
  
      // Hide all cards and show only the current one
      cards.forEach((card, i) => {
        card.classList.remove('active');
        card.resetFlip();
        if (i === index) {
          card.classList.add('active');
        }
      });
    }
  
    nextCard() {
      this.showCard(this._currentIndex + 1);
    }
  
    previousCard() {
      this.showCard(this._currentIndex - 1);
    }
  }
  
  // Register custom elements
  customElements.define('song-card', SongCard);
  customElements.define('song-deck', SongDeck);
  