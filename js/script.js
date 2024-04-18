window.onload = function () {
  const playButton = document.getElementById("play-button");
  const restartButton = document.getElementById("restart-button");
  let game;

  playButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game()
    game.start()
  }


const instructionsDiv = document.getElementById("instructions"); 
const instructionButton = document.getElementById("instruction-button"); 

// Add click event listener to the button
instructionButton.addEventListener('click', showPopup);

function showPopup () {
  // Add 'animated' class to the div to trigger the animation
  instructionsDiv.classList.add('animated');

  // Remove the event listener from the button
  instructionButton.removeEventListener('click', showPopup);
}

function handleKeydown(event) {
  const key = event.key;
  const possibleKeystrokes = ["ArrowUp"];

  // Check if the pressed key is in the possibleKeystrokes array
  if (possibleKeystrokes.includes(key)) {
    event.preventDefault();

    // Update player's directionX and directionY based on the key pressed
    switch (key) {
      case "ArrowUp":
        game.player.directionY = -1;
        break;
    }
  }
}

window.addEventListener("keydown", handleKeydown);

restartButton.addEventListener("click", function () {
  restartGame();
});

function restartGame() {
  location.reload();
}

};