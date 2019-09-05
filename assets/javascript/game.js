$(document).ready(function() {

    // Variable for random computer number choice between 19 - 120
    var computerRandom = [""];

    // Variables to hold user total scores, wins, and losses.
    var wins = 0;
    var losses = 0;
    var score = 0;
    var scoreBank = [""];

    var green = Math.floor(Math.random() * 13) + 1;
    var tan = Math.floor(Math.random() * 13) + 1;
    var white = Math.floor(Math.random() * 13) + 1;
    var brown = Math.floor(Math.random() * 13) + 1;

    // Random computer choice, between 19-120
    var computerGuess = Math.floor(Math.random() * 120) + 19;

    console.log("computer pick;", computerGuess)

    // Program runs whenevr user enters data 

    // Diplays the use and computer guesses, along with wins, losses, toal and remaining guesses
    $("#computer-text").text(computerGuess);
    $("#userscore-text").text(score);
    $("#userwins-text").text(wins);
    $("#userlosses-text").text(losses);

    // On click displaying values of each user click to allow Math.floor to select random numbers for each.
    $("#green").on("click", function () {
        score += green;
        console.log("score:",score);
    });

    $("#tan").on("click", function () {
        score += tan;
        console.log("score:",score);
    });

    $("#white").on("click", function () {
        score += white;
        console.log("score:",score);
    });

    $("#brown").on("click", function () {
        score += brown;
        console.log("score:",score);
    });
})

// If user id's total to get equal to computerRandom tallied for a win then reset game

// If user id's total > computerRandom tallied for a loss then reset game


