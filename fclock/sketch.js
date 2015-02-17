// Variables


// Runs first, before setup
function preload() {
  // Great place to load images
}

// Runs once at start of code
function setup() {
  // Set size
  var canvas = createCanvas(650, 200);
  canvas.parent('sketch');
  strokeWeight(10);

  // After glow
  stroke(255, 255, 255, 50);
  drawDigit(8, 20, 20);
  drawDigit(8, 120, 20);
  drawDigit(8, 240, 20);
  drawDigit(8, 340, 20);
  drawDigit(8, 460, 20);
  drawDigit(8, 560, 20);

  stroke(255);
}

function draw() {
  // Forever loop
  background(0, 20, 50, 40);

  //Hours
  var chour = hour() % 12;
  drawDigit(floor(chour/10), 20, 20);
  drawDigit(chour%10, 120, 20);

  // Minutes
  drawDigit(floor(minute()/10), 240, 20);
  drawDigit(minute()%10, 340, 20);

  // Seconds
  drawDigit(floor(second()/10), 460, 20);
  drawDigit(second()%10, 560, 20);
}

function drawDigit(digit, x, y) {
  // Top
  if(!(digit == 1 || digit == 4)) {
    line(x+10, y, x+60, y);
  }
  // Top Left
  if(digit == 0 || (digit > 3 && digit != 7)) {
    line(x, y+10, x, y+70);
  }
  // Top Right
  if(!(digit == 5 || digit == 6)) {
    line(x+70, y+10, x+70, y+70);
  }
  // Middle
  if(digit > 1 && digit != 7) {
    line(x+10, y+80, x+60, y+80);
  }
  // Bottom Left
  if(digit == 0 || digit == 2 || (digit > 5 && digit%2 == 0)) {
    line(x, y+90, x, y+150);
  }
  // Bottom Right
  if(digit != 2) {
    line(x+70, y+90, x+70, y+150);
  }
  // Bottom
  if(!(digit == 1 || digit == 4 || digit == 7)) {
    line(x+10, y+160, x+60, y+160);
  }
}