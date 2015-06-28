recent();
/*The recent page, retrieves messages from messages.json */
function recent(){
d3.json("messages.json", function(data){
var jsonMsg=data;
width = 500, colour1="white", colour2="steelblue";
	
	var body = d3.select("body");
	/*The main workspace for the message box*/
	var svg = body.append("svg")
		.attr("height", 1000)
		.attr("width", 1500);
		
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
	
	//not enough time to code dynamic text from messages json 
	//appending static image in meantime for presentation
	
	var messages = mainBox.selectAll("image")
		.data(jsonMsg)
		.enter()
		.append("image");
	
	var img1 = mainBox.append("image")
		.attr("xlink:href", "bin/msg1.png")
		.attr("x", 250).attr("y", 150)
		.attr("height", 300).attr("width", 300);
	var img1 = mainBox.append("image")
		.attr("xlink:href", "bin/msg2.png")
		.attr("x",150).attr("y", 325)
		.attr("height", 300).attr("width", 300);
	var img1 = mainBox.append("image")
		.attr("xlink:href", "bin/msg3.png")
		.attr("x", 250).attr("y", 500)
		.attr("height", 300).attr("width", 300);
	
	var avatars = messages
		.attr("x", function(d, i){
		if(d.position=="patient"){return 500}
		if(d.position=="clinician"){return 175}
		})
		.attr("y", function(d, i) { return d.y})
		.attr("width", 50)
		.attr("height", 50)
		.attr("xlink:href", function(d) { return d.image });
		
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
	/*
	var svg1 = d3.select("#chart")
		.append("svg")
		.attr("width", 500)
		.attr("height", 500);
		
	var textBox = svg1.selectAll("rect")
		.data(jsonMsg)	
		.enter()
		.append("rect")
		.attr("x", function(d, i) {
			return i * (width / jsonMsg.length);
		})
		.attr("y", function(d) {
			return height - 50;
		})
		.attr("width", 50)
		.attr("height", 300)
		.attr("fill", "white");
		
	var textMessages = svg1.selectAll("text")
		.data(jsonMsg)
		.enter()
		.append("text");
		
	var message = textMessages
		.attr("x", function(d) { return d.x })
		.attr("y", function(d, i) { return d.y+(100*i)})
		.attr("dy", "10em")
		.text(function(d) { return d.message})
		.attr("text-anchor", "middle");
		*/
	/*var message = svg.append("svg:text")
		.attr("x", 200)
		.attr("y", 250)
		.attr("width", 20)
		.attr("height", 300)
		.text("te\n lawkjroasdasdasdasdasdasdasdasdasdasdasdasd	lawkjroasdasdasdasd <br>		asdasdasdasdasdasdasdasdf");
	var bbox = message.node().getBBox();
	
	var rect = svg.append("svg:rect")
		.attr("x", bbox.x)
		.attr("y", bbox.y)
		.attr("width", bbox.width)
		.attr("height", bbox.height)
		.attr("fill", "#ccc")
		.attr("fill-opacity", ".3");
		*/
		
})
}