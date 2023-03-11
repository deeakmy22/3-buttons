const MAX_BTN = 3;

const randomNr = Math.floor(Math.random() * MAX_BTN) + 1;

function checkWinner(currentBtn) {
  console.log(randomNr, currentBtn);
  if (randomNr == currentBtn) {
    alert("Congratulations! You've guessed the button!");
  } else {
    alert("Sorry! Is not a winner :(");
  }
}
