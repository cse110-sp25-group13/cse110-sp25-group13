// Sample card data with audio
const cardData = [
    {
        audioSrc: "audio/no_one_noticed.mp3",
        song: "No One Noticed",
        artist: "The Marias",
        albumCover: "https://i.scdn.co/image/ab67616d0000b27330257bd4af1639e05af14c98"
    },
    {
        audioSrc: "audio/break_you_off.mp3",
        song: "Break You Off",
        artist: "Sonder",
        albumCover: "https://i.scdn.co/image/ab67616d0000b27381f848a20c8e23a738c004f0"
    },
    {
        audioSrc: "audio/little_bit.mp3",
        song: "Little Bit",
        artist: "Drake, Lykke Li",
        albumCover: "https://i.scdn.co/image/ab67616d0000b27397639c703b41454a3242a0f7"
    },
    {
        audioSrc: "audio/why.mp3",
        song: "Why",
        artist: "Dominic Fike",
        albumCover: "https://i.scdn.co/image/ab67616d0000b273cfc824b65a3b1755d98a7e23"
    },
    {
        audioSrc: "audio/faking_it.mp3",
        song: "Faking It",
        artist: "Calvin Harris, Kehlani, Lil Yachty, Funk Wav",
        albumCover: "https://i.scdn.co/image/ab67616d0000b273f0c088c4a7d4cb3c818ef9af"
    },
    {
        audioSrc: "audio/poison.mp3",
        song: "Poison",
        artist: "jaydes",
        albumCover: "https://i1.sndcdn.com/artworks-DsqRkfbzTMAq-0-t500x500.jpg"
    },
    {
        audioSrc: "audio/heartbreaker.mp3",
        song: "Heartbreaker",
        artist: "Justin Bieber",
        albumCover: "https://i.scdn.co/image/ab67616d0000b27301b6c1083f3ce2ea8311a4b4"
    },
    {
        audioSrc: "audio/so_easy.mp3",
        song: "SO EASY",
        artist: "Rich Amiri",
        albumCover: "https://i.scdn.co/image/ab67616d0000b273e20e203e532ab60a61b38fec"
    },
    {
        audioSrc: "audio/fear_of_flying.mp3",
        song: "Fear of Flying",
        artist: "Mac Wetha, Amine, Beabadoobee",
        albumCover: "https://i1.sndcdn.com/artworks-4Nfvxdp4gU2K-0-t500x500.jpg"
    },
    {
        audioSrc: "audio/modern_jam.mp3",
        song: "MODERN JAM",
        artist: "Travis Scott, Teezo Touchdown",
        albumCover: "https://i.scdn.co/image/ab67616d0000b273881d8d8378cd01099babcd44"
    },
    {
        audioSrc: "audio/philly.mp3",
        song: "PHILLY",
        artist: "Playboi Carti, Travis Scott",
        albumCover: "https://i.scdn.co/image/ab67616d0000b2736b219c8d8462bfe254a20469"
    },
    {
        audioSrc: "audio/coughdrops.mp3",
        song: "COuGhDrOPs (,,Ծ‸Ծ,,)",
        artist: "1999 WRITE THE FUTURE, Cuco, Warren Hue",
        albumCover: "https://i1.sndcdn.com/artworks-ePg9uuXV5nev-0-t500x500.jpg"
    },
    {
        audioSrc: "audio/why_is_it_light_out.mp3",
        song: "Why Is It Light Out?",
        artist: "The Kilans",
        albumCover: "https://i.scdn.co/image/ab67616d0000b273b97bf03aa574e9a37e71c4c7"
    },
    {
        audioSrc: "audio/pyramids.mp3",
        song: "Pyramids",
        artist: "Frank Ocean",
        albumCover: "https://i.scdn.co/image/ab67616d0000b2737aede4855f6d0d738012e2e5"
    },
    {
        audioSrc: "audio/nokia.mp3",
        song: "NOKIA",
        artist: "Drake",
        albumCover: "https://i.scdn.co/image/ab67616d0000b273cc392813bfd8f63d4d5f4a95"
    },
    {
        audioSrc: "audio/shut_up_my_moms_calling.mp3",
        song: "Shut up My Moms Calling",
        artist: "Hotel Ugly",
        albumCover: "https://i.scdn.co/image/ab67616d0000b273350ab7a839c04bfd5225a9f5"
    },
    {
        audioSrc: "audio/ghost_town.mp3",
        song: "Ghost Town",
        artist: "Kanye West, PARTYNEXTDOOR",
        albumCover: "https://i.scdn.co/image/ab67616d0000b2730cd942c1a864afa4e92d04f2"
    },
    {
        audioSrc: "audio/summertime_in_paris.mp3",
        song: "Summertime in Paris",
        artist: "Jaden, WILLOW",
        albumCover: "https://i.scdn.co/image/ab67616d0000b27360ec4df52c2d724bc53ffec5"
    },
    {
        audioSrc: "audio/wont_live_here.mp3",
        song: "Won't Live Here",
        artist: "Daniel Caesar",
        albumCover: "https://i.scdn.co/image/ab67616d0000b273eb8ed626d0a8a0527fb7ac93"
    },
    {
        audioSrc: "audio/a_song_about_being_sad.mp3",
        song: "A Song About Being Sad",
        artist: "Rex Orange County",
        albumCover: "https://i.scdn.co/image/ab67616d0000b273dbf3c10406ac999c39bf4a97"
    },
    {
        audioSrc: "audio/hell_n_back.mp3",
        song: "Hell N Back",
        artist: "Bakar",
        albumCover: "https://i.scdn.co/image/ab67616d0000b273b6aa65ea45fef5e36dfe1a45"
    },
    {
        audioSrc: "audio/boyfriend.mp3",
        song: "Boyfriend",
        artist: "Ariana Grande, Social House",
        albumCover: "https://i.scdn.co/image/ab67616d0000b2732ca010dcf3863a07611d8b4f"
    },
    {
        audioSrc: "audio/feel_it.mp3",
        song: "Feel It",
        artist: "d4vd",
        albumCover: "https://i.scdn.co/image/ab67616d0000b273a9da992c2ef398245027d654"
    },
    {
        audioSrc: "audio/after_hours.mp3",
        song: "After Hours",
        artist: "The Weeknd",
        albumCover: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36"
    },
    {
        audioSrc: "audio/lonely.mp3",
        song: "Lonely",
        artist: "Akon",
        albumCover: "https://i.scdn.co/image/ab67616d0000b273c45a75cba7099003063c8e64"
    }
    
    // Add more cards as needed
  ];
  
  document.addEventListener('DOMContentLoaded', () => {
    const deck = document.getElementById('my-deck');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    // Populate the deck with cards
    cardData.forEach((card, index) => {
      const songCard = document.createElement('song-card');
      songCard.setAttribute('audio-src', card.audioSrc);
      songCard.setAttribute('song', card.song);
      songCard.setAttribute('artist', card.artist);
      songCard.setAttribute('card-number', (index + 1).toString());
      if (card.albumCover) {
        songCard.setAttribute('album-cover', card.albumCover);
      }
      deck.appendChild(songCard);
    });
    
    // Show the first card initially
    deck.showCard(0);
    
    // Add navigation button handlers
    nextBtn.addEventListener('click', () => deck.nextCard());
    prevBtn.addEventListener('click', () => deck.previousCard());
  });
  