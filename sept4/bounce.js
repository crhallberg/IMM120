// Variables
var x      = [0 , 100];
var y      = [0 , 100];
var speedX = [25, 5];
var speedY = [15, 15];

// Runs first, before setup
function preload() {
  // Great place to load images
}

// Runs once at start of code
function setup() {
  // Set size
  var canvas = createCanvas(500, 300);
  canvas.parent('sketch');
  noStroke();
  fill(255);
}

function draw() {
  // Forever loop
  background(0);

  stroke(255);
  var angle = (frameCount/100) * TWO_PI;
  line(width/2, height/2,
  	cos(angle) * 160 + width/2,
  	sin(angle) * 160 + height/2
  );

  //  start     stop (test)   change
  for(var i = 0 ; i < 2 ; i=i+1) { // i++

	ellipse(x[i], y[i], 50, 50);

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
