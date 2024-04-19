window.onload = function () {
  const playButton = document.getElementById("play-button");
  const winRestartButton = document.getElementById("win-restart-button");
  const lostRestartButton = document.getElementById("lost-restart-button");
  
  let game;

  playButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game()
    game.start()
  }


const instructionsDiv = document.querySelector(".instructions"); 
const instructionButton = document.getElementById("instruction-button"); 
const closeButtonInstruction= document.getElementById("close-instructions");

// Add click event listener to the button
instructionButton.addEventListener('click', showPopup);

function showPopup () {
  instructionsDiv.classList.add('animated');

  instructionButton.removeEventListener('click', showPopup);
}

closeButtonInstruction.addEventListener("click", hidePopup);

function hidePopup(){
  instructionsDiv.classList.remove('animated'); 
  instructionButton.addEventListener('click', showPopup);
}

winRestartButton.addEventListener("click", function () {
  restartGame();
});

lostRestartButton.addEventListener("click", function () {
  restartGame();
});

function restartGame() {
  location.reload();
}

};