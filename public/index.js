// ************************* START BUTTON EVENTS *************************
// When Start button is clicked, run startBtn function
document.getElementsByName("submit-button")[0].addEventListener("click", startBtn);


// startBtn function triggers submit event in the form, them gets player 1 and player 2 names as values and returns them.
function startBtn() {
  // Entered Player 1's Name
  var p1Entered = document.getElementById("first-player-name").value;

  // Entered Player 1's Name
  var p2Entered = document.getElementById("second-player-name").value;

  // Assign names to the contestants' section
  document.getElementsByClassName("player")[0].innerText = p1Entered;
  document.getElementsByClassName("player")[1].innerText = p2Entered;

  scrollBy({
    top: 1000,
    left: 0,
    behavior: 'smooth'
  });
}


// ************************* ROLL BUTTON EVENTS *************************
// When Roll button is clicked, run rollBtn function
document.getElementsByName("roll-button")[0].addEventListener("click", rollBtn);

function rollBtn() {

  function DiceGamer(i) {
    this.playerName = new Object(document.getElementsByClassName("player")[i - 1]);
    this.currentScore = new Object(document.getElementsByTagName("h4")[i - 1]);
    this.rollImage = new Object(document.getElementsByTagName("img")[i - 1]);
    this.resultMessage = new Object(document.getElementsByTagName("p")[i - 1]);
    this.resultThumbsUp = new Object(document.querySelectorAll(".fa-thumbs-up")[i - 1]);
    this.resultThumbsDown = new Object(document.querySelectorAll(".fa-thumbs-down")[i - 1]);
  }

  var diceGamer1 = new DiceGamer(1);
  var diceGamer2 = new DiceGamer(2);

  var dice1;
  var dice2;

  if (parseInt(diceGamer1.currentScore.innerText) < 5 && parseInt(diceGamer2.currentScore.innerText) < 5) {
    dice1 = Math.floor(Math.random() * 6 + 1);
    dice2 = Math.floor(Math.random() * 6 + 1);

    diceGamer1.rollImage.setAttribute("src", "images/dice" + dice1 + ".png");
    diceGamer2.rollImage.setAttribute("src", "images/dice" + dice2 + ".png");

    if (dice1 > dice2) {

      diceGamer1.resultMessage.innerText = diceGamer1.playerName.innerText + " Wins!";
      diceGamer1.resultThumbsUp.classList.remove("thumbs-hide");
      diceGamer1.resultThumbsDown.classList.add("thumbs-hide");

      diceGamer2.resultMessage.innerText = diceGamer2.playerName.innerText + " Loses!";
      diceGamer2.resultThumbsUp.classList.add("thumbs-hide");
      diceGamer2.resultThumbsDown.classList.remove("thumbs-hide");

      diceGamer1.currentScore.innerText = parseInt(diceGamer1.currentScore.innerText) + 1;

    } else if (dice1 < dice2) {

      diceGamer1.resultMessage.innerText = diceGamer1.playerName.innerText + " Loses!";
      diceGamer1.resultThumbsUp.classList.add("thumbs-hide");
      diceGamer1.resultThumbsDown.classList.remove("thumbs-hide");

      diceGamer2.resultMessage.innerText = diceGamer2.playerName.innerText + " Wins!";
      diceGamer2.resultThumbsUp.classList.remove("thumbs-hide");
      diceGamer2.resultThumbsDown.classList.add("thumbs-hide");

      diceGamer2.currentScore.innerText = parseInt(diceGamer2.currentScore.innerText) + 1;

    } else {
      diceGamer1.resultMessage.innerText = "Draw!";
      diceGamer2.resultMessage.innerText = "Draw!";
      diceGamer1.resultThumbsUp.classList.add("thumbs-hide");
      diceGamer1.resultThumbsDown.classList.add("thumbs-hide");
      diceGamer2.resultThumbsUp.classList.add("thumbs-hide");
      diceGamer2.resultThumbsDown.classList.add("thumbs-hide");
    }

    if (parseInt(diceGamer1.currentScore.innerText) === 5 || parseInt(diceGamer2.currentScore.innerText) === 5) {
      document.getElementsByClassName("roll-btn")[0].innerText = "Restart";
    }

  } else {
    location.reload();
    scrollBy(0, -1000);
  }

}


// document.querySelectorAll(".fa-thumbs-down")[0].classList.toggle("thumbs-hide");
