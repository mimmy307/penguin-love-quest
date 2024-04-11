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