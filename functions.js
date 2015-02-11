//useful functions


adjacent = function(button1, button2){ // true if buttons ID are adjacent 
	//log("adjacent","made it");
	var b1 = Number(button1.id);
	var b2 = Number(button2.id);
	var x1 = b1 % 10;
	var y1 = (b1 - x1) / 10;
	//log("x1",x1); log("y1",y1);
	var x2 = b2 % 10;
	var y2 = (b2 - x2) / 10;
	//log("x2",x2);
	//log("y2",y2);
	return ((x1 == x2+1 || x1 == x2-1) && !(y1 < y2 || y1 > y2)) 
			|| (!(x1 > x2 || x1 < x2) && (y1 == y2+1 || y1 == y2-1));
};

full = function(button){ // returns true if button has a character
	//log("full", "made it");
	return button.dataset.char != "none";

};

isQueen = function(button){ // returns true if button has a queen or knight 
	//var character = button.data-char;
	//log("isQueen", "made it");
	return button.dataset.char == "knight1" || button.dataset.char == "queen"
		|| button.dataset.char == "knight2";
};

transfer = function(button1, button2){ 
	// copy button1's char info into button 2, then delete info
	//log("transfer","made it");
	var character = button1.dataset.char;
	button2.setAttribute("data-char",character);
	button1.setAttribute("data-char","none");
	highlight(button1, "none");
	imageTransfer(button1,button2);

};

highlight = function(button, bool){
	// if true, highlights tile. If false, unhighlights it.
	var x = "#"+button.id;
	if(bool == "none"){
		var no = "rgb(192, 192, 192)";
		$(x).css('background-color',no);
	}
	
	//log("background color",$(x).css('background-color'));
	$(x).css('background-color',bool);
	//log("highlight", "made it");

};

log = function(name, message){
	console.log(name+": "+message);
};




