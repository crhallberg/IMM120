var dickson = function(sketch) {

// Variables


// Runs first, before setup
sketch.preload = function() { with(sketch) {
  // Great place to load images
}
}

// Runs once at start of code
sketch.setup = function() { with(sketch) {
  // Set size
  var canvas = createCanvas(500, 500);
  canvas.parent('dickson');
}
}

sketch.draw = function() { with(sketch) {
  // Forever loop
background(0, 0, 255, 90)

noStroke(255);
fill(255);
ellipse(width/2, height/2, 405, 405);

stroke(0);
strokeWeight(5.5);
line(width/2, height/2,
	cos(minute()/10) * 400 + width/2, sin(minute()/10) * 400 + height/2);

line(width/2, height/2,
	cos(second()/10 - PI/2) * 200 + width/2, sin(second()/10 - PI/2) * 200 + height/2);

line(width/2, height/2,
	cos(millis()/159) * 100 + width/2, sin(millis()/159) * 100 + height/2);

noStroke();

fill(255, 0, 0, 200);
ellipse(width/2, height/2, 205, 205);

}
}

};

new p5(dickson);