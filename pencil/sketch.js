var pencilColor = 0;

function setup() {
  // Set size
  var canvas = createCanvas(500, 500);
  canvas.parent('sketch');
  background(200);
  strokeWeight(2);
  stroke(pencilColor);
}

function draw() {
  stroke(pencilColor);
  line(mouseX, mouseY, pmouseX, pmouseY);

  fill(255);
  stroke(50);
  rect(25, 25, 50, 50);

  fill(pencilColor);
  stroke(255-pencilColor);
  ellipse(width-50, 50, 50, 50);
}