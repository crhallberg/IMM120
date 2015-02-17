var andrew = function(sketch) {

// Variables
var x      = [0 , 100];
var y      = [0 , 100];
var speedX = [25, 5];
var speedY = [15, 15];

// Runs first, before setup
sketch.preload = function() { with(sketch) {
  // Great place to load images
}
}

// Runs once at start of code
sketch.setup = function() { with(sketch) {
  // Set size
  var canvas = createCanvas(500, 500);
  canvas.parent('andrew');
  noStroke();
  fill(255);
}
}

sketch.draw = function() { with(sketch) {
  // Forever loop
  //red, green, blue
  background(255, 255, 153);

 { stroke(0);
  strokeWeight(15)
  fill(255, 255, 255);

  ellipse(height/2, width/2, 450, 450);


  stroke(0, 0, 0);
  strokeWeight(15);
  fill(0);

  ellipse(height/2, width/2, 10, 10);

  fill(0);
  textSize(48);
  noStroke();
  // width, height
  text("10", 70, 180);
  text("11", 135, 110);
  text("12", 220, 75);

  fill(0);
  textSize(50);
  noStroke();
  // width, height
  text("1", 325, 110);
  text("2", 390, 180);
  text("3", 420, 265);
  text("4", 395, 350);
  text("5", 330, 425);
  text("6", 235, 450);
  text("7", 150, 425);
  text("8", 80, 350);
  text("9", 55, 265);

}
// Hour Hand
  stroke(255, 0, 0);
  strokeWeight(10);
  var angle = (frameCount/2600000) * TWO_PI;
  //line(250, 180, 250, 250),
  line(width/2, height/2,
  	cos(angle) * 105 + width/2,
  	sin(angle) * 105 + height/2
  );

  //  start     stop (test)   change
  for(var i = 0 ; i < 2 ; i=i+1) { // i++

	//ellipse(x[i], y[i], 50, 50);

	x[i] = x[i] + speedX[i];
	y[i] = y[i] + speedY[i];

	if(y[i] > height) {
	  speedY[i] = -speedY[i];
	}
	if(y[i] < 0) {
	  speedY[i] = -speedY[i];
	}
	if(x[i] > width) {
	  speedX[i] = -speedX[i];
	}
	if(x[i] < 0) {
	  speedX[i] = -speedX[i];
	}
  }

 // Seconds Hand
  stroke(0, 0, 255);
  strokeWeight(1);
  var angle = (frameCount/3500) * TWO_PI;
  line(width/2, height/2,
  	cos(angle) * 150 + width/2,
  	sin(angle) * 150 + height/2
  );

  //  start     stop (test)   change
  for(var i = 0 ; i < 2 ; i=i+1) { // i++

	//ellipse(x[i], y[i], 50, 50);

	x[i] = x[i] + speedX[i];
	y[i] = y[i] + speedY[i];

	if(y[i] > height) {
	  speedY[i] = -speedY[i];
	}
	if(y[i] < 0) {
	  speedY[i] = -speedY[i];
	}
	if(x[i] > width) {
	  speedX[i] = -speedX[i];
	}
	if(x[i] < 0) {
	  speedX[i] = -speedX[i];
	}
  }
// Minutes Hand
 { stroke(0, 0, 0);
	 strokeWeight(10); /* This is thickness */
  var angle = (frameCount/240000) * TWO_PI;
  line(width/2, height/2,
  	// 3 digit number is the length
  	cos(angle) * 175 + width/2,
  	sin(angle) * 175 + height/2
  );

  //  start     stop (test)   change
  for(var i = 0 ; i < 2 ; i=i+1) { // i++

	//ellipse(x[i], y[i], 50, 50);

	x[i] = x[i] + speedX[i];
	y[i] = y[i] + speedY[i];

	if(y[i] > height) {
	  speedY[i] = -speedY[i];
	}
	if(y[i] < 0) {
	  speedY[i] = -speedY[i];
	}
	if(x[i] > width) {
	  speedX[i] = -speedX[i];
	}
	if(x[i] < 0) {
	  speedX[i] = -speedX[i];
	}
  }

}

}
}

};

new p5(andrew);
