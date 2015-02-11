// populates board. 
// initializes to start page. 

var queen = "Queen";
var hunter = "Hunter";
var playerQueen = true; //true for queen; 

var aiMode = "Against AI";
var multiplayerMode = "Multiplayer";
var mode = true; //true for against AI mode 


newgame = function(playerType, playMode){
	// clears screen and creates board
	clear();

};

clickhandler = function(){
	game.clicked(this);
}

 
//home();
var chars = createBoard();
//log("chars",chars);
var game = new Software(chars);
$(".gridbutton").on("click",clickhandler);

