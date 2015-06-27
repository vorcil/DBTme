initializeMessage();

/*The initial DBT messaging system*/
function initializeMessage(){
/*Call the patient JSON list and match data to dropdown box of users */
//d3.json("patient.json", function(data){
	/*Global Variables*/
	width = 500, colour1="white", colour2="steelblue";
	
	var body = d3.select("body");
	/*The main workspace for the message box*/
	var svg = body.append("svg")
		.attr("height", 1000)
		.attr("width", 1500);
		console.log("getting here");
	var mainBox = svg.append("svg")
		.attr("width", 1500).attr("height", 1000);
		
	var backgroundBox = mainBox.append("rect")
		.attr("x", 50).attr("y", 100).attr("rx", 10).attr("ry", 10)
		.attr("height", 750).attr("width",width+100)
		.attr("fill", "lightgray").attr("opacity", .5);
	
	var banner = mainBox.append("image")
	.attr("x", 75).attr("y", 110).attr("height", 85).attr("width", 600)
	.attr("xlink:href", "bin/banner.png");
	var line = mainBox.append("line")
	.attr("x1", 100).attr("x2",600).attr("y1", 200).attr("y2", 200).style("stroke","gray");
	
	var toBox = mainBox.append("rect")
		.attr("x", 100).attr("y", 220).attr("rx", 5).attr("ry", 5)
		.attr("height", 50).attr("width", width)
		.attr("fill", "white").attr("stroke", "black").attr("stroke-width", 0.2)
		.on("mouseover", function(d) {mouseoverChange(d3.select(this))})
		.on("mouseout", function(d) {mouseoutChange(d3.select(this))});
		
	var messageBox = mainBox.append("rect")
		.attr("x", 100).attr("y", 280).attr("rx", 5).attr("ry", 5)
		.attr("height", 350).attr("width", width)
		.attr("fill", "white").attr("stroke", "black").attr("stroke-width", 0.2)
		.on("mouseover", function(d) {mouseoverChange(d3.select(this))})
		.on("mouseout", function(d) {mouseoutChange(d3.select(this))});
	
	var toText = mainBox.append("text")
		.attr("x", 125).attr("y", 255).text("To: ").attr("font-size", 30);
		
	var otherBox = mainBox.append("rect")
		.attr("x", 100).attr("y", 640).attr("rx", 5).attr("ry", 5)
		.attr("height", 150).attr("width", width)
		.attr("fill", "white").attr("stroke", "black").attr("stroke-width", 0.2)
		.on("mouseover", function(d) {mouseoverChange(d3.select(this))})
		.on("mouseout", function(d) {mouseoutChange(d3.select(this))});
		
	var backButton = mainBox.append("image")
		.attr("x", 55).attr("y", 110).attr("width",35).attr("height", 35)
		.attr("xlink:href", "bin/back.png")
		.on("mouseover", function(d) {mouseoverChange(d3.select(this))})
		.on("mouseout", function(d) {mouseoutChange(d3.select(this))})
		.on("click", function(d) { location.href = "index.html"});

function mouseoverChange(d){
d.attr("fill", colour2).attr("opacity", .3);
}

function mouseoutChange(d){
d.attr("fill", colour1).attr("opacity", 1);
}

//})	
}
