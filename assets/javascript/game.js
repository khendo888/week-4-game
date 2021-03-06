//DEFINE GLOBAL VARIABLES
//------------------------------------------------------------------

var wins=0;
var losses=0;
var totalScore=0;
var compNumber;  // Set this variable to be empty and reset the value within your functions.
var green= Math.floor((Math.random() * 12) + 1);         //random number for all crystals should be between 1 and 12
var red=Math.floor((Math.random() * 12) + 1);
var blue=Math.floor((Math.random() * 12) + 1);
var yellow=Math.floor((Math.random() * 12) + 1);

// Functions should do one thing only, and be named in a way that you can predict what this one thing is
// If your function does multiple things, we call these 'side effects', and we want to avoid these in the real world.
// randomizeCrystals();
// startGame(); -- this should clear the screen of any pre-set values and then call randomizeCrystals() within it, after things have been reset
// 



//DEFINE FUNCTIONS
//---------------------------------------------------------------------
function restartGame() {
	compNumber = Math.floor(Math.random() * 120) + 19;
	randomizeCrystals();
	$("#winGame").html("Wins: " + wins);
	console.log("wins: " + wins);  
	$("#loseGame").html("Losses: " + losses)
	console.log("losses: " + losses);
	$("#compGuess").html("Computer-generated random number: " + compNumber);
	console.log("compNumber: " + compNumber);
}
function randomizeCrystals () {
	green= Math.floor((Math.random() * 12) + 1);
	red=Math.floor((Math.random() * 12) + 1);
	blue=Math.floor((Math.random() * 12) + 1);
	yellow=Math.floor((Math.random() * 12) + 1);
}
function startGame () {
	randomizeCrystals();
	compNumber = Math.floor(Math.random() * 120) + 19;
	wins=0;
	$("#winGame").html("Wins: " + wins);
	console.log("wins: " + wins);  
	losses=0;
	$("#loseGame").html("Losses: " + losses)
	console.log("losses: " + losses);	
	totalScore=0;
	$("#totalScore").html(totalScore);
	console.log("totalScore" + totalScore);
}

function generateRandomNumber (min, max) {
	var compNumber=Math.floor(Math.random() * (max - min + 1)) + min;
	console.log(compNumber);
	return compNumber;
} 

function win (){
	wins++;
	alert("You won!");
	restartGame();
}

function lose () {
	losses++;
	alert("You lose!");
	restartGame();
}

function checkWin (totalScore, compNumber) {
	if(totalScore === compNumber) {
		win ();
		console.log("You won!");
		restartGame();
	} else if(totalScore > compNumber) {
		lose();
		console.log("You lose, sucka!");
		restartGame();
	} else if (totalScore < compNumber) {  //will keep adding to the total
		console.log("We continue on towards victory");
	}

}


// Calling functions:

// Run restartGame() initially so that it randomizes all your crystals, and after every win/loss. 
// Empty your var blue/gree/red/blue/yellow so the value can be set within this function.



//MAIN PROCESS
//----------------------------------------------------------------------
//to start the game, set win and loss counters equal to 0, generate random numbers for each crystal
// and display the random number guessed by the computer.

startGame();

$("#green").on('click', function(){
	totalScore=totalScore + green;
	console.log("Green was clicked");
	$("#totalScore").html(totalScore);
	checkWin(totalScore, compNumber);
});

$("#red").on('click', function(){
	totalScore=totalScore + red;
	console.log("Red was clicked");
	$("#totalScore").html(totalScore);
	checkWin(totalScore, compNumber);

});

$("#blue").on('click', function(){
	totalScore=totalScore + blue;
	console.log("Blue was clicked");
	$("#totalScore").html(totalScore);
	checkWin(totalScore, compNumber);
});

$("#yellow").on('click', function(){
	totalScore=totalScore + yellow;
	console.log("Yellow was clicked");
	$("#totalScore").html(totalScore);
	checkWin(totalScore, compNumber);
});

// MAKE ALL CODE RUN WHEN YOU CLICK ANY OF THE CRYTALS. ASSIGN AN EVENT HANDLER TO THE CODE BELOW. 
// If you want something to update every time a person clicks on a crystal, 
// you need to tell the computer to do so. 
// https://www.w3schools.com/jquery/event_on.asp


// Updates display to show wins, losses, and compNumber
$("#winGame").html("Wins: " + wins);
	console.log("wins: " + wins);  
$("#loseGame").html("Losses: " + losses);
	console.log("losses: " + losses);
$("#compGuess").html("Computer-generated random number: " + compNumber);
	console.log("compNumber: " + compNumber); //is the random number in the range?


// Continually checking to see if there's a win or loss. 
if (totalScore === compNumber){
	console.log("totalScore: " + totalScore);
	win();
	restartGame();
}

else if (totalScore > compNumber){
	console.log("totalScore: " + totalScore);
	lose();
}

else if (totalScore < compNumber){
	console.log("totalScore: " + totalScore);
} 

















