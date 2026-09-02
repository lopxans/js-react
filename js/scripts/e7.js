/* 

// Normal function
function greeding() {
    console.log('hello');
}
greeding();
// _______________________________________________________

// Anonymous Function: function without name
const function1  = function() {
    console.log('Hello2');
}
console.log(function1);
console.log(typeof function1);
function1();

// _______________________________________________
const object1 = {
    num: 2,
    fun: function() {
        console.log('hello3');
    }
}
object1.fun();

// _________________________________________________________
// function parameter
function display(param) {
    console.log(param);
}
display(2);

// _________________________________________________________
// Callback function: Passing a function into another function
function run(param) {
    param();
}
run(function () {
    console.log('hello4')
});

// _________________________________________________________
// A function we want to run in the future
setTimeout(function() {
    console.log('timeout');
    console.log('tomeout1')  // Synchronous Code
    }, 3000);
    console.log('next line');   // Asynchronous Code
    - Asynchronous Code: Won't wait for a line to finish before going the next line
    - Synchronous Code: weill wait for one line to finish before going the next line
// _________________________________________________________


setInterval(function() {
    console.log('interval')
}, 3000);
console.log('next line 2');

// _____________________________________________________________
// Arrow Function
const arrowFunction = () => {
  console.log('arrow function');
}
arrowFunction();

const oneParam =  param => {
  console.log(param + 1);
}
oneParam(2)

// one line funtion 
const oneLine = () => 2 +3;
console.log(oneLine());


*/



let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickeComputerMove();

  let result = "";

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissor") {
      result = "You lose.";
    } else if (computerMove === "rock") {
      result = "You win.";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "scissors") {
      result = "Tie.";
    } else if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    }
  }

  // update score
  if (result === "You win.") {
    score.wins += 1;
  } else if (result === "You lose.") {
    score.losses += 1;
  } else {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(".js-moves").innerHTML =
    `      You <img src="img/${playerMove}-emoji.png" class="move-icon">
      <img src="img/${computerMove}-emoji.png" class="move-icon"> Computer`;
}

function updateScoreElement() {
  document.querySelector(".js-score").innerHTML =
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickeComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}


let isAutoPlaying = false;
let intervalID;
function autoPlay() {
    if (!isAutoPlaying) {
        intervalID = setInterval(function() {
            const playerMove = pickeComputerMove();
            playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;

    }else {
        clearInterval(intervalID);
        isAutoPlaying = false;
    }
}

const autoPlay = () => {}

