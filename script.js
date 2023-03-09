const MAX_BTN = 3;

function checkWinner(currentBtn) {
  randomNr = Math.floor(Math.random() * MAX_BTN) + 1;
  console.log(randomNr, currentBtn);
  if (randomNr == currentBtn) {
    alert("Congratulations! You've guessed the button!");
  } else {
    alert("Sorry! Is not a winner :(");
  }
}
