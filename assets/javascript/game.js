var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Setting for zero
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterUser = [];
var eachOfLetters = null;

//computer randomly selects a letter
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//number of guesses remaining, updates HTML selector
function countGuessesLeft() {
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

//letters the user has guessed so far
function userGuesses() {
	document.querySelector("#letter").innerHTML = "Letters Guessed: " + letterUser.join(', ');
}

countGuessesLeft();

// restart game
var restart = function() {
	guessesLeft = 9;
	letterUser = [];
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	console.log(computerGuess);
}

// onkeyup functions. 
document.onkeyup = function(event) {
	guessesLeft--;

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	//adds user key selection
	letterUser.push(userGuess);
	countGuessesLeft();
	userGuesses();

	if (userGuess === computerGuess){
		wins++;
		document.querySelector("#wins").innerHTML = "Wins: " + wins;
		restart();
	} 
	//alerts if invalid key is pressed
	else if (event.keyCode < 65 || event.keyCode > 90) {
		alert("Invalid Entry");
	}

	else if (guessesLeft === 0) {
		losses++;
		document.querySelector("#lose").innerHTML = "Losses: " + losses;
		restart();
	}

	
  };
