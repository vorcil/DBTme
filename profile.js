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
		.attr("x", 100).attr("y", 210).attr("rx", 10).attr("ry", 10)
		.attr("height", 100).attr("width",100)
		.attr("fill", "#8FCC94");
	var contactHistory = mainBox.append("image")
		.attr("xlink:href", "bin/github11.png")
		.attr("x", 100).attr("y", 210).attr("width",100).attr("height", 100);
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


		
drawText("@Username1990",230 , 230);
drawText("Friday Skills Group",230 , 290);
drawText("Mob: +64221850365",230 , 260);


drawText("Helpful:",110 , 350);
drawText("- Spend time with Pet (Nemo)",110 , 370);

drawText("Unhelpful:",110 , 420);
drawText("- Txt Boyfriend",110 , 440);
drawText("- Shopping",110 , 460);
drawText("Risk Behaviours:",110 , 537);
drawText("- Self Harm (Cutting)",110 , 557);
drawText("- Substance Abuse (Alcohol)",110 , 577);
drawText("Support People", 350 , 537);
drawText("Best Friend: ", 350 , 555);
drawText("Maggie McDonald +642219603645", 350 , 570);
function drawText(text,x,y){
text = mainBox.append("text")
.attr("x", x).attr("y", y).text(text).attr("font-size", 15).style("font-weight", 5).attr("class","text");
}		
function mouseoverChange(d){
d.attr("fill", colour2).attr("opacity", .3);
}

function mouseoutChange(d){
d.attr("fill", colour1).attr("opacity", 1);
}

//})	
}
