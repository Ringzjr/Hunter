//aesthetics 
// audio and visuals 
var aestheticsInit = false;
var hunterURL = "url('pics/whitemage.jpg')";
var queenURL = "url('pics/princess.jpg')";
var knightURL = "url('pics/blackmage.jpg')";
var hunterGray = "url('pics/whitemagegray.jpg')";
var queenGray = "url('pics/princessgray.jpg')";
var knightGray = "url('pics/blackmagegray.jpg')";
var characters = {};
characters["hunter"] = {}; characters["hunter"]["tapped"] = hunterGray;
characters["hunter"]["untapped"] = hunterURL;
characters["queen"] = {}; characters["queen"]["tapped"] = queenGray;
characters["queen"]["untapped"] = queenURL;
characters["knight1"] = {}; characters["knight1"]["tapped"] = knightGray;
characters["knight1"]["untapped"] = knightURL;
characters["knight2"] = {}; characters["knight2"]["tapped"] = knightGray;
characters["knight2"]["untapped"] = knightURL;

tick = function(){
	if(aestheticsInit)
		return;
	aestheticsInit = true;
	var ticked = document.createElement("AUDIO");
	ticked.setAttribute("src","Sounds/mouseOn.wav");
	var pressed = document.createElement("AUDIO");
	pressed.setAttribute("src","Sounds/clicked.wav");
	document.body.appendChild(ticked);
	document.body.appendChild(pressed);
	$("button").mouseenter(function() {
		ticked.play();
	})
	$("button").click(function() {
		pressed.play();
		})
	
	};

home = function(){
	//clears screen and creates homescreen 
	//clear()
		clear();
		var div = document.getElementById("grid");
		var dia = document.createElement("BUTTON");
		var deb = document.createElement("BUTTON");
		var dia_name = document.createTextNode("Multiplayer");
		var deb_name = document.createTextNode("Against AI");
		dia.classList.add("home");
		dia.classList.add("item");
		deb.classList.add("home");
		deb.classList.add("item");

		dia.style.height = "200px";
		dia.style.width = "200px";
		dia.style.fontSize = "30px";
		deb.style.width = "200px";
		deb.style.height = "200px";
		deb.style.fontSize = "30px";

		var br = document.createElement("br");
		br.classList.add("item");
		document.body.appendChild(dia);
		document.body.appendChild(deb);
		dia.appendChild(dia_name);
		deb.appendChild(deb_name);
		$(".item").appendTo(div);
		tick();
		$(".home").animate({height:"220px"});
		$(".home").animate({width:"220px"});
		$(".home").animate({height:"200px"});
		$(".home").animate({width:"200px"});
		$(".home").wrap("<li></li>");
		div.style.height = "70vh";


		var options = document.getElementById("options");
		options.style.position = "absolute";
		options.style.bottom = "200px";

		var radioQueen = document.createElement("input");
		radioQueen.type = "radio";
		radioQueen.name = "mode";
		radioQueen.id = "queen"; 
		radioQueen.classList.add("choice");

		var queenlabel = document.createElement("label");
		queenlabel.classList.add("choice");
		queenlabel.setAttribute("for", "queen");
		queenlabel.innerHTML = "Play as Queen";

		var radioHunter = document.createElement("input");
		radioHunter.type = "radio";
		radioHunter.name = "mode";
		radioHunter.id = "hunter";
		radioHunter.classList.add("choice")

		var hunterlabel = document.createElement("label");
		hunterlabel.classList.add("choice");
		hunterlabel.setAttribute("for","hunter");
		hunterlabel.innerHTML = "Play as Hunter";

		document.body.appendChild(radioQueen);
		document.body.appendChild(queenlabel);
		document.body.appendChild(radioHunter);
		document.body.appendChild(hunterlabel);
		$(".choice").appendTo(options);

};

createBoard = function(){
	clear();
	var div = document.getElementById("grid");
	var chars = [];
	for(i=0; i<5;i++){
		var d = document.createElement("div");
		d.classList.add("gridrow");
		d.setAttribute("id",i);
		d.style.height = "100px";
		d.style.width = "600px";
		d.style.position = "relative";
		for(j=0; j<5;j++){
			var x = ""+i+j;
			var tile = document.createElement("button");
			tile.style.height = "100px";
			tile.style.width = "100px";
			tile.classList.add("gridbutton");
			tile.setAttribute("id",x);
			var character;
			if(i == 0 && j == 2)character = "queen";
			else if (i == 1 && j==1 )character = "knight1";
			else if (i == 1 && j == 3)character = "knight2";
			else if (i == 4 && j ==2)character = "hunter";
			else character = "none";
			tile.setAttribute("data-char",character);
			
			if(character == "hunter")
				tile.style.backgroundImage = "url('pics/whitemage.jpg')";
			else if(character == "queen")
				tile.style.backgroundImage = "url('pics/princess.jpg')";
			else if(character == "knight1" || character == "knight2")
				tile.style.backgroundImage = "url('pics/blackmage.jpg')";
			var e = document.createElement("div");
			e.appendChild(tile);
			if(character != "none"){
				chars.push(tile);
				//log("trouble pushing",chars);
				}
			e.setAttribute("id","tile "+x);
			e.style.height = "100px";
			e.style.width = "100px";
			e.style.border = "1px solid black";
			//e.style.position = "absolute";
			e.style.float = "left";
			e.classList.add("gridtile");
			//document.body.appendChild(e);
			d.appendChild(e);
		}
		//document.body.appendChild(d);
		div.appendChild(d);

	}
	return chars;
};


clear = function(){
	$(".item").remove();

};

imageTransfer = function(button1, button2){
	var hunter = "url('pics/whitemage.jpg')";
	var knight = "url('pics/blackmage.jpg')";
	var queen = "url('pics/princess.jpg')";
	var background = button1.style.backgroundImage;
	button2.style.backgroundImage = background;
	button1.style.backgroundImage = "";
};

tap = function(button){
	var character = button.dataset.char;
	log("tap",character);
	if (character == "none"){
		log("tap","character is none");
		return;
	}
	log("image to",characters[character]["tapped"]);
	button.style.backgroundImage = characters[character]["tapped"];
}

untap = function(button){
	var character = button.dataset.char;
	log("untapping",character);
	if (character == "none"){
		log("tap","character is none");
		return;
	}
	button.style.backgroundImage = characters[character]["untapped"];

}
	