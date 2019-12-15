// fire function on window load
window.addEventListener("load", init);

// levels
const levels = {
  easy: 5,
  medium: 4,
  hard: 3
};

const currentLevel = levels.easy;
// Globals
let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
  "hat",
  "river",
  "lucky",
  "statue",
  "generate",
  "stubborn",
  "cocktail",
  "runaway",
  "joke",
  "developer",
  "establishment",
  "hero",
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "siblings",
  "investigate",
  "horrendous",
  "symptom",
  "laughter",
  "magic",
  "master",
  "space",
  "definition"
];

function init() {
  showWord(words); //Get random word
  wordInput.addEventListener("input", startMatch); // start matching word as soon as user start typing.
  setInterval(countDown, 1000); // Start counting every second
  setInterval(checkStatus, 50); // Keep checking if playing or not
  seconds.innerHTML = currentLevel;
}

const showWord = words => {
  const randomIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randomIndex];
};

const startMatch = () => {
  if (showMatch()) {
    isPlaying = true;
    showWord(words);
    time = currentLevel + 1;
    score++;
    wordInput.value = "";
    setTimeout(() => {
      message.innerHTML = "";
    }, 500);
  }
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
};

const showMatch = () => {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!!!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
};
const countDown = () => {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
};

const checkStatus = () => {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!!!";
    score = -1;
  }
};
