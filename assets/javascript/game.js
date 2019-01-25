var wins = 0
var losses = 0
var randNum = randNumFinder();
var crystals = ["1", "2", "3", "4"]
var crystalNum = 0;
var currentCrystalNum = [];
var crystalOne = currentCrystalNum[0];
var crystalTwo = currentCrystalNum[1];
var crystalThree = currentCrystalNum[2];
var crystalFour = currentCrystalNum[3];
var userGuess = 0;

// finding the number to guess between 19 and 120

function randNumFinder() {
    let randNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    return randNum;
}

//assgning a random number between 1 and 12 to each crystal, and storing those numbers in 
//currentCrystalNum array

function crystalNumFinder() {
    for (i = 0; i < 4; i++) {
        let crystalNum = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        currentCrystalNum.push(crystalNum);

    }
}

function checkWin() {
    if (userGuess === randNum) {
        alert("You win!")
        wins++;
        loadGame()

    }
    if (userGuess > randNum) {
        alert("You Lose!")
        losses++;
        loadGame()
    }
}
//loading the game

function loadGame() {
    currentCrystalNum = [];
    userGuess = 0;
    //reset the magic number. Right now load game does not reset magic number when called?
    randNumFinder();
    $("#randNum").text("Magic Number: " + randNum);
    crystalNumFinder();

    console.log(randNum)
    console.log(currentCrystalNum)

    $("#userGuess").text("User Guess: " + userGuess);
    $("#wins").text("Wins: " + wins)
    $("#losses").text("Losses: " + losses)
}



$(document).ready(function () {
    loadGame();

    //whole bunch of functions to caputer onclick events and increase the user guess

    $("img#crystalOne").click(function () {

        userGuess = userGuess + currentCrystalNum[0];
        console.log(currentCrystalNum[0])
        $("#userGuess").text("User Guess: " + userGuess);
        checkWin()
    });

    $("img#crystalTwo").click(function () {

        userGuess = userGuess + currentCrystalNum[1];
        console.log(currentCrystalNum[1])
        $("#userGuess").text("User Guess: " + userGuess);
        checkWin()
    });
    $("img#crystalThree").click(function () {

        userGuess = userGuess + currentCrystalNum[2];
        console.log(currentCrystalNum[2])
        $("#userGuess").text("User Guess: " + userGuess);
        checkWin()

    });
    $("img#crystalFour").click(function () {

        userGuess = userGuess + currentCrystalNum[3];
        console.log(currentCrystalNum[3])
        $("#userGuess").text("User Guess: " + userGuess);
        checkWin()

    });


});