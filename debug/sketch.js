// Variables
var currentColor = 255;

// Runs once at start of code
function setUp() {
  // Set size
  var canvas = createCanvas(500, 500);
  canvas.parent('sketch');
  
  var circleSize = width/10;
}

function draw() {
  fill(currentColor);
  ellipse(mouseX, mouseX, circleSize, circleSize);
  
  if(mouseIsPressed) {
    currentColor = nextcolor();
  } else {
    background(0);
  }
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
  colors[colorCount];
}