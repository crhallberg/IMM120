// Variables

// Runs first, before setup
function preload() {
  // Great place to load images
}

// Runs once at start of code
function setup() {
  // Set size
  var canvas = createCanvas(500, 500);
  canvas.parent('sketch');
}

function draw() {
  // Forever loop
  background(255, 200, 200);
  
  stroke(255);
  fill(0, 0, 100);

  line(50, 75, 200, 200);
  line(150, 175, 250, 20);
  ellipse(200, 100, 100, 100);

  fill(30, 145, 10);
  ellipse(mouseX, mouseY, 100, 100);

  noFill();
  rect(100, 100, 200, 30);
  triangle(20,20, 100,100, mouseX, mouseY);
  //       x1,y1   x2,y2   x3,y3

  strokeWeight(10);
  ellipse(250, height/2, 50, 150);

  fill(0);
  textSize(64);
  noStroke();
  text("Hello!", 100, height/2);
}
