// Variable for random computer number choice between 19 - 120
var computerRandom = [""];

// Variables to hold user total scores, wins, and losses.
var wins = 0;
var losses = 0;
var score = 0;
var scoreBank = [""];

// Variables to be displayed via browser using getElementById link.
var computerNumber = document.getElementById("computernumber-text");
var userScore = document.getElementById("userscore-text");
var userWins = document.getElementById("userwins-text");
var userLoses = document.getElementById("userloses-text");

// Random computer choice, between 19-120
var computerGuess = Math.floor(Math.random() * 120) + 19;

console.log("computer pick;", computerGuess)

// Program runs whenevr user enters data 
document.onkeyup = function (event) {

    var user = event.key;

     // Diplays the use and computer guesses, along with wins, losses, toal and remaining guesses
     userWins.textContent = "You have : " + wins;
     userLoses.textContent = "You have : " + losses;


}



