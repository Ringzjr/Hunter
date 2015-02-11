// Software object created by board
// listens for gridbutton clicks 
// Turned off by board.js 

Software = function(cha){
	this.isOnline = false;
	this.selected = null;
	this.queenTurn = true;	// queens turn
	this.hunterTurn = false; 
	this.totalMoves = 0;  // each player gets two moves 
	this.power(true);
	
	this.moves = {};
	this.moves["hunter"] = 0;
	this.moves["queen"] = 0;
	this.moves["knight1"] = 0;
	this.moves["knight2"] = 0;

	this.chars = {};
	this.chars["queen"] = null;
	this.chars["knight1"] = null;
	this.chars["knight2"] = null;
	this.chars["hunter"] = null;

	for(i = 0; i < cha.length; i++){
		var character = cha[i].dataset.char;
		//log("character:",character);
	this.chars[character] = cha[i];
	
	}
}

Software.prototype = {

	power: function(on){
		this.isOnline = on;
	},

	clicked: function(button){
		//checks to see if a tile has been previously selected
			// if this tile is adjacent to the previously selected one
				// if(selected) can this adjacent tile can be moved to?
				// if (!selected) does this tile have any moves 
		var selected = (this.selected != null);
		var valid;
		if(selected)
		   valid = adjacent(this.selected, button) && !full(button);
		else
			valid = full(button) && isQueen(button) == this.queenTurn;

		if(!valid){
			console.log("invalid move: ");
			this.unselect();
			return;
		}

		var character;
		
		if(selected){
			character = this.selected.dataset.char;
			this.chars[character] = this.selected;
		}
		else{
			character = button.dataset.char; 
			this.chars[character] = button;
		}
		var steps = this.moves[character];
		var max = (character == "hunter")? 2: 1;
		log("character",character);
		log("steps",steps);
		log("max",max);



		//Make sure you don't go past the limit of moves 
		if(steps >= max){
			log("character is tapped. Invalid move.");
			return;
		}

		
		if(selected){
			log("selected", selected);
			this.moves[character] = this.moves[character] + 1; // worked 
			log("moves for "+character,this.moves[character]);
			transfer(this.selected,button); // either problem here
			this.chars[character] = button;
			this.unselect();
			this.totalMoves++;
			if(this.moves[character] >= max){
				tap(button);}
			if(this.totalMoves > 1)
				this.changeTurn(); // awaken new player's character 
		}
		else
			this.select(button); 


	},

	unselect: function(){
		//if this.selected != null, unhighlight it.
		if(this.selected == null)
			return;
		this.selected = null;
	},

	select: function(button){
		this.unselect();
		this.selected = button;
		console.log(button);
		//highlight selected 
		highlight(button,"orange");
	},

	changeTurn: function(){
		this.queenTurn = !this.queenTurn; 
		this.hunterTurn = !this.hunterTurn; 
		this.totalMoves = 0;
		if(this.queenTurn){
			this.moves["queen"] = 0;
			this.moves["knight1"] = 0;
			this.moves["knight2"] = 0;
			untap(this.chars["queen"]);
			untap(this.chars["knight1"]);
			untap(this.chars["knight2"]);
		}
		else {this.moves["hunter"]=0;untap(this.chars["hunter"]);}
		this.unselect();
	}


}