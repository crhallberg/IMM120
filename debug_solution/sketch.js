// Variables
var currentColor = 255;
var circleSize; //

// Runs once at start of code
function setup() { //
  // Set size
  var canvas = createCanvas(500, 500);
  canvas.parent('sketch');
  
  circleSize = width/10;
}

function draw() {
  if(mouseIsPressed) { //
    currentColor = nextColor(); //
  } else {
    background(0); //
  }
  
  fill(currentColor);
  ellipse(mouseX, mouseY, circleSize, circleSize);
}

function mouseReleased() {
  circleSize = random()*100+30;
}

var colorCount = 0;
function nextColor() {
  var colors = [255, [255,50,50], [50,255,50], [50,50,255]];
  colorCount = colorCount+1;
  if(colorCount > colors.length) {
    colorCount = 0;
  }
  return colors[colorCount]; //
}