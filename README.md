# unit-4-game


## Screen Shot
<img src="assets/images/.png" alt="screenshot">

## Technologies Used
- HTML - used to create elements on the DOM
- CSS - styles html elements on page
- Javascript - allows dynamic interaction between user and computer data entry
- JQuery - a javascript library that allows for simple yet more diverse and less verbos.
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages

## Summary
This application 

## Code Snippet
'''JQuery

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

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Psychic-Game</title>

</head>

<body>

    <div>
        <h1>The Psychic Game</h1>

        <p>Guess what letter I am thinking of?</p>

        <p id="userchoice-text"></p>

        <p id="computerchoice-text"></p>

        <p id="wins-text"></p>

## Author Links
[GitHub](https://github.com/flexsant)