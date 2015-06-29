call();
/*log a call */
function call(){
    d3.json("patients.json", function(data){
	 jsonPat=data; // gotta populate this somehow
	width = 500, colour1="white", colour2="steelblue";
	input_height = 50;
	
	selectedPatient = "";
	var numPatients = 5; // 1. get the patients' icons from the file
	
	var name, message, time;
	var body = d3.select("body");
	/*The main workspace for the message box*/
	var svg = body.append("svg")
	    .attr("height", 1000)
	    .attr("width", 1500);
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


	
	// draw box containing 'Find patient...' text
	var nameBox = mainBox.append("rect")
	    .attr("x", 150)
	    .attr("y", 210)
	    .attr("rx", 5)
	    .attr("ry", 5)
	    .attr("height", 50)
	    .attr("width", width-100)
	    .attr("fill", "white")
	    .attr("stroke", "black")
	    .attr("stroke-width", 0.2)
	    .on("mouseover", function(d) { mouseoverChange(d3.select(this)) })
	    .on("mouseout", function(d) { mouseoutChange(d3.select(this)) })
	    .on("click", function(d) {
		mainBox.selectAll(".dropdown-toggle").remove();
		dropdown();
	    });
	
	var nameText = mainBox.append("text")
	    .attr("x", 175)
	    .attr("y", 245)
	    .attr("class", "nameText")
	    .text("Find patient...")
	    .attr("font-size", 30)
	   // .attr("class","large-title")
	    .attr("id","name");


	
	/*var patientText = mainBox.append("text")
	  .attr("x", 175).attr("y", 305).text("").attr("font-size", 30)
	  .attr("class","large-title");
	  
	  var patientImg = mainBox.append("image")
	  .attr("x", 150).attr("y", 405).attr("width",35).attr("height", 35)
	  .attr("xlink:href", "")
	  .attr("class","large-text");*/

	// DROPDOWN BOX BEGINS

	function dropdown(){
	    // 2. draw the dropdown menu
	    var dropdown = mainBox.append("rect")
	    	.attr("hidden", false) // dropdown should start out hidden
	    	.attr("class","dropdown-toggle")
		.attr("x", 150).attr("y", 210).attr("rx", 5).attr("ry", 5)
		.attr("height", (50*numPatients)).attr("width", width-100)
		.attr("fill", "white").attr("stroke", "black").attr("stroke-width", 0.2);

	    patientsButton=mainBox.selectAll("rect")
		.data(data)
		.enter()
		.append("svg:rect");

	     patientsText=mainBox.selectAll("text")
		.data(data)
		.enter()
		.append("svg:text");
	    
	    // 3. fill in the contents of the menu
	    patientsButton
		.attr("id",function(d,i) {return d.id})
		.attr("x", function(d,i) {return d.x})
		.attr("y", function(d) {return d.y})
		.attr("height",function(d) {return d.height})
		.attr("width", function(d) {return d.width})
    		.attr("fill", "white")
	     	.attr("hidden", false)
	    	.attr("class","dropdown-toggle")
	    	.attr("rx", 5)
	    	.attr("ry", 5)
	    	.attr("stroke", "black")
		.attr("stroke-width", 0.2)
    		.on("mouseover", function(d) { mouseoverChange(d3.select(this)) })
    		.on("mouseout", function(d) { mouseoutChange(d3.select(this)) })
		.on("click",function(d) { 
		    mainBox.selectAll(".dropdown-toggle").style("display", "none");
		    selectedPatient = d.patientName;
		    d3.selectAll(".nameText").text(selectedPatient);
		    
		    //console.log(selectedPatient);
		    // d3.select("#name").text("sallyuser1990"); });
		});
	    
	    var text =patientsText
		.attr("x", 175)
		.attr("y", function(d) {return d.y+40})//function(d,i) { return d.y})
		.text(function(d) {return d.patientName})
		.attr("class","dropdown-toggle")
		.attr("font-size", 25);
	
	
	
	}
	
	var backButton = mainBox.append("image")
	    .attr("x", 55).attr("y", 110).attr("width",35).attr("height", 35)
	    .attr("xlink:href", "bin/backgray.png")
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
	
    })
}
	       
