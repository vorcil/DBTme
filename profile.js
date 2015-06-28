draw();
function draw(){

	/*Global Variables*/
	width = 500, colour1="white", colour2="steelblue";
	
	var body = d3.select("body");
	/*The main workspace for the message box*/
	var svg = body.append("svg")
		.attr("height", 1000)
		.attr("width", 1500);
		console.log("getting here");
	//workspace to append to
	
	var mainBox = svg.append("svg")
		.attr("width", 1500).attr("height", 1000);
		
// part of profile pic
	
	var picBox = mainBox.append("rect")
		.attr("x", 120).attr("y", 225).attr("rx", 10).attr("ry", 10)
		.attr("height", 80).attr("width",70)
		.attr("fill", "#8FCC94");
//box level 1		
	var userName = mainBox.append("rect")
		.attr("x", 220).attr("y", 210).attr("rx", 10).attr("ry", 10)
		.attr("height", 100).attr("width",260)
		.attr("fill", "#8FCC94");
	
	var userName = mainBox.append("rect")
		.attr("x", 100).attr("y", 325).attr("rx", 10).attr("ry", 10)
		.attr("height", 165).attr("width",500)
		.attr("fill", "#57CBF5");
		
	var userName = mainBox.append("rect")
		.attr("x", 100).attr("y", 510).attr("rx", 10).attr("ry", 10)
		.attr("height", 150).attr("width",500)
		.attr("fill", "#57CBF5");
		
	/*var userName = mainBox.append("rect")
		.attr("x", 100).attr("y", 620).attr("rx", 10).attr("ry", 10)
		.attr("height", 150).attr("width",500)
		.attr("fill", "#57CBF5");*/

	//gray box
	var backgroundBox = mainBox.append("rect")
		.attr("x", 50).attr("y", 100).attr("rx", 10).attr("ry", 10)
		.attr("height", 750).attr("width",width+100)
		.attr("fill", "lightgray").attr("opacity", .5);
		
	
		
	//logo
	var banner = mainBox.append("image")
	.attr("x", 75).attr("y", 110).attr("height", 85).attr("width", 600)
	.attr("xlink:href", "bin/banner.png");
	var line = mainBox.append("line")
	.attr("x1", 100).attr("x2",600).attr("y1", 200).attr("y2", 200).style("stroke","gray");
	
	var backButton = mainBox.append("image")
		.attr("x", 55).attr("y", 110).attr("width",35).attr("height", 35)
		.attr("xlink:href", "bin/back.png")
		.on("mouseover", function(d) {mouseoverChange(d3.select(this))})
		.on("mouseout", function(d) {mouseoutChange(d3.select(this))})
		.on("click", function(d) { location.href = "index.html"});
		
	var contactHistory = mainBox.append("image")
		.attr("xlink:href", "bin/histroy.png")
		.attr("x", 92).attr("y", 650).attr("width",150).attr("height", 150);
	var contactHistory = mainBox.append("image")
		.attr("xlink:href", "bin/log-call.png")
		.attr("x", 274).attr("y", 650).attr("width",150).attr("height", 150);
	var contactHistory = mainBox.append("image")
		.attr("xlink:href", "bin/message.png")
		.attr("x", 455).attr("y", 650).attr("width",150).attr("height", 150);
var contactHistory = mainBox.append("image")
		.attr("xlink:href", "bin/middle path.png")
		.attr("x", 500).attr("y", 265).attr("width",40).attr("height", 40);
var contactHistory = mainBox.append("image")
		.attr("xlink:href", "bin/distress-tolerance.png")
		.attr("x", 560).attr("y", 265).attr("width",40).attr("height", 40);
var contactHistory = mainBox.append("image")
		.attr("xlink:href", "bin/interpersonal effectiveness.png")
		.attr("x", 500).attr("y", 212).attr("width",40).attr("height", 40);
var contactHistory = mainBox.append("image")
		.attr("xlink:href", "bin/emotion-reg.png")
		.attr("x", 560).attr("y", 212).attr("width",40).attr("height", 40);



	var contactHistory = mainBox.append("image")
		.attr("xlink:href", "bin/github12.png")
		.attr("opacity", 1).attr("x", 66).attr("y", 170).attr("width",170).attr("height", 170);
				
drawText("@sallyuser1990",270 , 230);
//uname logo
var uname = mainBox.append("image")
		.attr("xlink:href", "bin/user77.png")
		.attr("x", 229).attr("y", 210).attr("width",30).attr("height", 30);
//phone
drawText("+64221850365",270 , 255);
var uname = mainBox.append("image")
		.attr("xlink:href", "bin/telephone65.png")
		.attr("x", 229).attr("y", 235).attr("width",30).attr("height", 30);
//skype
drawText("Sal.call1990",270 , 279);
var uname = mainBox.append("image")
		.attr("xlink:href", "bin/skype9.png")
		.attr("x", 229).attr("y", 260).attr("width",30).attr("height", 30);
		
//therapy group
drawText("Friday Skills Group",270 , 303);
var uname = mainBox.append("image")
		.attr("xlink:href", "bin/group41.png")
		.attr("x", 231).attr("y", 285).attr("width",25).attr("height", 25)

//helpful
var uname = mainBox.append("image")
		.attr("xlink:href", "bin/thumbsups.png")
		.attr("x", 100).attr("y", 330).attr("width",25).attr("height", 25)
drawHeader("Helpful:",130 , 350);
drawText("- Spend time with Pet (Nemo)",130 , 370);
//unhelpful

var uname = mainBox.append("image")
		.attr("xlink:href", "bin/thumbsdown.png")
		.attr("x", 340).attr("y", 335).attr("width",25).attr("height", 25)
		
drawHeader("Unhelpful:",370 , 350);
drawText("- Txt Boyfriend",370 , 370);
drawText("- Shopping",370 , 390);


//risk
var uname = mainBox.append("image")
		.attr("xlink:href", "bin/medkit.png")
		.attr("x", 100).attr("y", 520).attr("width",25).attr("height", 25)
drawHeader("Risk Behaviours:",130 , 537);
drawText("- Self Harm (Cutting)",130 , 557);
drawText("- Substance Abuse (Alcohol)",130 , 577);
//support people
drawHeader("Support People", 350 , 537);
var uname = mainBox.append("image")
		.attr("xlink:href", "bin/heart74.png")
		.attr("x", 320).attr("y", 520).attr("width",25).attr("height", 25)

drawText("Best Friend: ", 350 , 555);
drawText("Maggie McDonald", 350 , 575);
drawText("+642219603645", 350 , 595);


function drawText(text,x,y){
text = mainBox.append("text")
.attr("x", x).attr("y", y).text(text).attr("font-size", 1).style("font-weight", 5).attr("class","text");
}
function drawHeader(text,x,y){
text = mainBox.append("text")
.attr("x", x).attr("y", y).text(text).attr("font-size", 20).style("font-weight", 30).attr("class","header");
}			
function mouseoverChange(d){
d.attr("fill", colour2).attr("opacity", .3);
}

function mouseoutChange(d){
d.attr("fill", colour1).attr("opacity", 1);
}

//})	
}
