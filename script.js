"use strict";

///Setting a random nummber with Math.trunc(Math.random()

let secretNumber = Math.trunc(Math.random() * 20) + 1;

//Initial State scores
let score = 20;
let highScore = 0;


//Setting conditions on clicking the Check button

document.querySelector(".check").addEventListener("click", function () {
  //evaluating a string into a number
  const guess = Number(document.querySelector(".guess").value);
 

  ///if there is no guess:
  if (!guess) {
    document.querySelector(".message").textContent = "No Number";
  }

  //if the guess is the same as the secret number
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number!";

    //displaying the hidden number, and containing box will widen
    document.querySelector(".number").textContent = secretNumber;
document.querySelector(".number").style.width = "30rem";
//screen background will turn green
    document.querySelector("body").style.backgroundColor = "green";

    
//Getting the high score
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // If the guess is not the same as the secret number
  } else if (guess !== secretNumber) {

    //Playing until you run out of score
    if (score > 1) {
    
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too High" : "too low";

      //Calculate the decreasing score when  wrong number is guessed
      score--;

      document.querySelector(".score").textContent = score;

    } else {
      //Changing text 
      document.querySelector(".message").textContent = "You Lost The Game";

      document.querySelector(".score").textContent = 0;
      
      document.querySelector("body").style.backgroundColor = "#ff0000";
    };
  };
});

/////////////Again Button for Resetting the Game///////

///1. call the Again button and add even listener of 'Click'

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  ///2. Recalculate the random number
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //3. Change the .message to 'Start guessing'
  document.querySelector(".message").textContent = "Start guessing";

  //4. Set the score counter to inital value -- score
  document.querySelector(".score").textContent = score;

  //5. Let the guess number remain anonymous
  document.querySelector(".number").textContent = "?";

  //6. set the .guess imput field to an empty string
  document.querySelector(".guess").value = "";

  //style change
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});


