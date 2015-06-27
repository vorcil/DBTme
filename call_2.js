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
	
	/* In a perfect world, all these individual fields could be just one field which, on clicking, 
	   opens up a calendar dropdown menu to select the exact date. */
	
	/* 'Date' box */
	var dayBox = mainBox.append("rect")
		.attr("x", 100).attr("y", 220).attr("rx", 5).attr("ry", 5)
		.attr("height", input_height).attr("width", 120)
		.attr("fill", "white").attr("stroke", "black").attr("stroke-width", 0.2);
	   
	/* Day field */
	var dayBox = mainBox.append("rect")
		.attr("x", 240).attr("y", 220).attr("rx", 5).attr("ry", 5)
		.attr("height", input_height).attr("width", 90)
		.attr("fill", "white").attr("stroke", "black").attr("stroke-width", 0.2)
		.on("mouseover", function(d) {mouseoverChange(d3.select(this))})
		.on("mouseout", function(d) {mouseoutChange(d3.select(this))});
		
	/* Month field */
	var dayBox = mainBox.append("rect")
		.attr("x", 350).attr("y", 220).attr("rx", 5).attr("ry", 5)
		.attr("height", input_height).attr("width", 90)
		.attr("fill", "white").attr("stroke", "black").attr("stroke-width", 0.2)
		.on("mouseover", function(d) {mouseoverChange(d3.select(this))})
		.on("mouseout", function(d) {mouseoutChange(d3.select(this))});
		
	/* Year field */
	var dayBox = mainBox.append("rect")
		.attr("x", 460).attr("y", 220).attr("rx", 5).attr("ry", 5)
		.attr("height", input_height).attr("width", 140)
		.attr("fill", "white").attr("stroke", "black").attr("stroke-width", 0.2)
		.on("mouseover", function(d) {mouseoverChange(d3.select(this))})
		.on("mouseout", function(d) {mouseoutChange(d3.select(this))});
	
	/* Time */
	var timeBox = mainBox.append("rect")
		.attr("x", 100).attr("y", 280).attr("rx", 5).attr("ry", 5)
		.attr("height", input_height).attr("width", width)
		.attr("fill", "white").attr("stroke", "black").attr("stroke-width", 0.2)
		.on("mouseover", function(d) {mouseoverChange(d3.select(this))})
		.on("mouseout", function(d) {mouseoutChange(d3.select(this))});
		
	var issueBox = mainBox.append("rect")
		.attr("x", 100).attr("y", 340).attr("rx", 5).attr("ry", 5)
		.attr("height", 150).attr("width", width)
		.attr("fill", "white").attr("stroke", "black").attr("stroke-width", 0.2)
		.on("mouseover", function(d) {mouseoverChange(d3.select(this))})
		.on("mouseout", function(d) {mouseoutChange(d3.select(this))});
		
	var planBox = mainBox.append("rect")
		.attr("x", 100).attr("y", 505).attr("rx", 5).attr("ry", 5)
		.attr("height", input_height).attr("width", width)
		.attr("fill", "white").attr("stroke", "black").attr("stroke-width", 0.2)
		.on("mouseover", function(d) {mouseoverChange(d3.select(this))})
		.on("mouseout", function(d) {mouseoutChange(d3.select(this))});
		
	var performBox = mainBox.append("rect")
		.attr("x", 100).attr("y", 570).attr("rx", 5).attr("ry", 5)
		.attr("height", 140).attr("width", width)
		.attr("fill", "white").attr("stroke", "black").attr("stroke-width", 0.2)
		.on("mouseover", function(d) {mouseoverChange(d3.select(this))})
		.on("mouseout", function(d) {mouseoutChange(d3.select(this))});
	
		/* Will show a dropdown box to select the name of required patient from JSON */	   
	var dateText = mainBox.append("text")
		.attr("x", 125).attr("y", 255).text("Date:").attr("font-size", 30);	   
	var timeText = mainBox.append("text")
		.attr("x", 125).attr("y", 315).text("Time:").attr("font-size", 30); 
	var issueText = mainBox.append("text")
		.attr("x", 125).attr("y", 375).text("Issue:").attr("font-size", 30);
	var planText = mainBox.append("text")
		.attr("x", 125).attr("y", 540).text("Plan:").attr("font-size", 30);
	var perfomText = mainBox.append("text")
		.attr("x", 125).attr("y", 610).text("Performance:").attr("font-size", 30);
		
	var backButton = mainBox.append("image")
		.attr("x", 55).attr("y", 110).attr("width",35).attr("height", 35)
		.attr("xlink:href", "bin/back-blue-01-01.png")
		.on("mouseover", function(d) {mouseoverChange(d3.select(this))})
		.on("mouseout", function(d) {mouseoutChange(d3.select(this))})
		.on("click", function(d) { location.href = "loadacall_1.html"});
		
	var acceptButton = mainBox.append("image")
		.attr("x", 250).attr("y", 750).attr("width",200).attr("height", 80)
		.attr("xlink:href", "bin/submit-01.png")
		.on("mouseover", function(d) {mouseoverChange(d3.select(this))})
		.on("mouseout", function(d) {mouseoutChange(d3.select(this))})
		.on("click", function(d) { location.href = "index.html"}); // CHANGE THIS

function mouseoverChange(d){
d.attr("fill", colour2).attr("opacity", .3);
}

function mouseoutChange(d){
d.attr("fill", colour1).attr("opacity", 1);
}	
}
