$(document).ready(function () {

    // Variable for random computer number choice between 19 - 120
    //var computerRandom = [""];

    // Variables to hold user total scores, wins, and losses.
    var wins = 0;
    var losses = 0;
    var user = 0;
    // Random number for each object between 1-12.
    var green = Math.floor(Math.random() * 13) + 1;
    var tan = Math.floor(Math.random() * 13) + 1;
    var white = Math.floor(Math.random() * 13) + 1;
    var brown = Math.floor(Math.random() * 13) + 1;

    // Random computer choice, between 19-120
    var computerGuess = Math.floor(Math.random() * 120) + 19;

    console.log("computer pick;", computerGuess);

    // Diplays the use and computer guesses, along with wins, losses, toal and remaining guesses
    function displayStats() {
        $("#computer-text").text(computerGuess);
        $("#userscore-text").text(user);
        $("#userwins-text").text(wins);
        $("#userlosses-text").text(losses);
    }
    // On click displaying values of each user click to allow Math.floor to select random numbers for each.
    $("#green").on("click", function () {
        user += green;
        displayStats();
        winCheck();
        console.log("score:", user);
        // displayStats();
    });

    $("#tan").on("click", function () {
        user += tan;
        displayStats();
        winCheck();
        console.log("score:", user);
        // displayStats();
    });

    $("#white").on("click", function () {
        user += white;
        displayStats();
        winCheck();
        console.log("score:", user);
        // displayStats();
    });

    $("#brown").on("click", function () {
        user += brown;
        displayStats();
        winCheck();
        console.log("score:", user);
        // displayStats();
    });
    //If user total equals computer guess tally win and rest game. If user total is > computer Guess tally loss and reset game.
    function winCheck() {
        console.log("score:", + user);
        if (user === computerGuess) {
            wins++;
            reset();
        }
        if (user > computerGuess) {
            losses++;
            reset();
        }
    }
    //random numbers for each color(crystal)
    function reset() {
        green = Math.floor(Math.random() * 13) + 1;
        tan = Math.floor(Math.random() * 13) + 1;
        white = Math.floor(Math.random() * 13) + 1;
        brown = Math.floor(Math.random() * 13) + 1;

        user = 0;
    }
})


