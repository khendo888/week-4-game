//DEFINE GLOBAL VARIABLES
//------------------------------------------------------------------

var wins=0;
var losses=0;
var totalScore=0;
var compNumber= Math.floor((Math.random() * 120) + 19);
var green= Math.floor((Math.random() * 12) + 1);
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

}

function getRandomNumber(min, max) {
   return Math.random() * (max - min) + min;
}

function win (){
	if (totalScore == compNumber);
wins++;
}

function lose () {
	if (totalScore>compNumber);
losses++;
restartGame;

}

function startGame () {



}





//MAIN PROCESS
//----------------------------------------------------------------------
//generate random numbers
$(#green)


