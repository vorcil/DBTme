call();
/*log a call */
function call(){
	width = 500, colour1="white", colour2="steelblue";
	input_height = 50;
	var name, message, time;
	var body = d3.select("body");
	/*The main workspace for the message box*/
	var svg = body.append("svg")
		.attr("height", 1000)
		.attr("width", 1500);
		console.log("getting here");
	var mainBox = svg.append("svg")
		.attr("width", 1500).attr("height", 1000);
		
	var backgroundBox = mainBox.append("rect")
		.attr("x", input_height).attr("y", 100).attr("rx", 10).attr("ry", 10)
		.attr("height", 750).attr("width",width+100)
		.attr("fill", "lightgray").attr("opacity", .5);
	
	var banner = mainBox.append("image")
	.attr("x", 75).attr("y", 110).attr("height", 85).attr("width", 600)
	.attr("xlink:href", "bin/banner.png");
	var line = mainBox.append("line")
	.attr("x1", 100).attr("x2",600).attr("y1", 200).attr("y2", 200).style("stroke","gray");
		
	var issueBox = mainBox.append("rect")
		.attr("x", 150).attr("y", 370).attr("rx", 5).attr("ry", 5)
		.attr("height", 50).attr("width", width-100)
		.attr("fill", "white").attr("stroke", "black").attr("stroke-width", 0.2)
		.on("mouseover", function(d) {mouseoverChange(d3.select(this))})
		.on("mouseout", function(d) {mouseoutChange(d3.select(this))});
	
		/* Will show a dropdown box to select the name of required patient from JSON */
	var nameText = mainBox.append("text")
		.attr("x", 175).attr("y", 405).text("Find patient...").attr("font-size", 30);
		
	var backButton = mainBox.append("image")
		.attr("x", 55).attr("y", 110).attr("width",35).attr("height", 35)
		.attr("xlink:href", "bin/back-blue-01-01.png")
		.on("mouseover", function(d) {mouseoverChange(d3.select(this))})
		.on("mouseout", function(d) {mouseoutChange(d3.select(this))})
		.on("click", function(d) { location.href = "index.html"});
		
	var acceptButton = mainBox.append("image")
		.attr("x", 430).attr("y", 750).attr("width",200).attr("height", 80)
		.attr("xlink:href", "bin/tick-01.png")
		.on("mouseover", function(d) {mouseoverChange(d3.select(this))})
		.on("mouseout", function(d) {mouseoutChange(d3.select(this))})
		.on("click", function(d) { location.href = "loadacall_2.html"});

function mouseoverChange(d){
d.attr("fill", colour2).attr("opacity", .3);
}

function mouseoutChange(d){
d.attr("fill", colour1).attr("opacity", 1);
}	
}
