home();

function home(){
/*Initializing the home page of the application 
Global variables:
*/
width=500, colour1="white", colour2="steelblue";

/*Select the body of html */
var body = d3.select("body");

/*Create a workspace for the application*/
var svg = body.append("svg")
	.attr("height", 1000)
	.attr("width", 1500);

/*Create the main workspace for the home page:
	consistency across all pages width:1500 height:1000 for each workspace 
*/
var mainBox = svg.append("svg")
	.attr("width", 1500)
	.attr("height", 1000);
	
var backgroundBox = mainBox.append("rect")
	.attr("x", 50).attr("y", 100).attr("rx", 10).attr("ry", 10)
	.attr("height", 750).attr("width", width+100)
	.attr("fill", "lightgray").attr("opacity", .5);
	
var banner = mainBox.append("image")
	.attr("x", 75).attr("y", 110).attr("height", 85).attr("width", 600)
	.attr("xlink:href", "bin/banner.png");
	
var line = mainBox.append("line")
	.attr("x1", 100).attr("x2",600).attr("y1", 200).attr("y2", 200).style("stroke","gray");

var recievedMessages = mainBox.append("image")
	.attr("xlink:href", "bin/recieved.png")
	.attr("x", 100).attr("y", 275).attr("rx", 5).attr("ry", 5)
	.attr("height", 100).attr("width", width)
	.attr("fill", "white").attr("stroke", "black").attr("stroke-width", 0.2)
	.on("mouseover", function(d) {mouseoverChange(d3.select(this))})
	.on("mouseout", function(d) {mouseoutChange(d3.select(this))})
	.on("click", function(d) { 
		location.href = "recent.html"});		

var sendMessage = mainBox.append("image")
	.attr("xlink:href", "bin/sent.png")
	.attr("x", 100).attr("y", 400).attr("rx", 5).attr("ry", 5)
	.attr("height", 100).attr("width", width)
	.attr("fill", "white").attr("stroke", "black").attr("stroke-width", 0.2)
	.on("mouseover", function(d) {mouseoverChange(d3.select(this))})
	.on("mouseout", function(d) {mouseoutChange(d3.select(this))})
	.on("click", function(d) { 
		location.href = "send.html"});	

var patientList = mainBox.append("image")
	.attr("xlink:href", "bin/ptlist.png")
	.attr("x", 100).attr("y", 525).attr("rx", 5).attr("ry", 5)
	.attr("height", 100).attr("width", width)
	.attr("fill", "white").attr("stroke", "black").attr("stroke-width", 0.2)
	.on("mouseover", function(d) {mouseoverChange(d3.select(this))})
	.on("mouseout", function(d) {mouseoutChange(d3.select(this))})
	.on("click", function(d) { 
		location.href = "profilepage.html"});	
		
var logacall = mainBox.append("image")
	.attr("xlink:href", "bin/logacall.png")
	.attr("x", 100).attr("y", 650).attr("rx", 5).attr("ry", 5)
	.attr("height", 100).attr("width", width)
	.attr("fill", "white").attr("stroke", "black").attr("stroke-width", 0.2)
	.on("mouseover", function(d) {mouseoverChange(d3.select(this))})
	.on("mouseout", function(d) {mouseoutChange(d3.select(this))})
	.on("click", function(d) { 
		location.href = "loadacall_1.html"});	

function mouseoverChange(d){
d.attr("fill", colour2).attr("opacity", .3);
}

function mouseoutChange(d){
d.attr("fill", colour1).attr("opacity", 1);
}

}