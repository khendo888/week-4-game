//DEFINE GLOBAL VARIABLES
//------------------------------------------------------------------

var wins=0;
var losses=0;
var totalScore=0;
var compNumber= Math.floor((Math.random() * 120) + 19);  //random number should be between 19 and 120
var green= Math.floor((Math.random() * 12) + 1);         //random number for all crystals should be between 1 and 12
var red=Math.floor((Math.random() * 12) + 1);
var blue=Math.floor((Math.random() * 12) + 1);
var yellow=Math.floor((Math.random() * 12) + 1);





//DEFINE FUNCTIONS
//---------------------------------------------------------------------
function restartGame() {
	compNumber= Math.floor((Math.random() * 120) + 19);
	green= Math.floor((Math.random() * 12) + 1);
	red=Math.floor((Math.random() * 12) + 1);
	blue=Math.floor((Math.random() * 12) + 1);
	yellow=Math.floor((Math.random() * 12) + 1);
	$(".nameOfDivToUpdate").html(variableHoldingInformation);
	console.log()
}


function win (){
	if (totalScore == compNumber);
wins++;
}

function lose () {
	if (totalScore > compNumber);
losses++;
}

//function


	




//MAIN PROCESS
//----------------------------------------------------------------------
//to start the game, set win and loss counters equal to 0, generate random numbers for each crystal
// and display the random number guessed by the computer.

$("#winGame").html("Wins: " + wins);
	console.log(wins);  
$("#loseGame").html("Losses: " + losses);
	console.log(losses);
$("#compGuess").html("Computer-generated random number: " + compNumber);
	console.log(compNumber); //is the random number in the range?























