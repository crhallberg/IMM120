// Variables

// Runs first and once
function setup() {
  createCanvas(640, 480); // size
  background(0);
  fill(255);
  textSize(42);
}

// Loops forever
function draw() {

}

function keyPressed() {
  if (key === ' ') {
    background(0);
  }
  // LEFT SIDE
  textAlign(LEFT);
  var padding = 10;
  if (key === 'A') {
    text('ROCK', padding, height/2);
  }
  if (key === 'S') {
    text('PAPER', padding, height/2);
  }
  if (key === 'D') {
    text('SCISSORS', padding, height/2);
  }
  // RIGHT SIDE
  textAlign(RIGHT);
  var padding = 10;
  if (key === 'J') {
    text('ROCK', width-padding, height/2);
  }
  if (key === 'K') {
    text('PAPER', width-padding, height/2);
  }
  if (key === 'L') {
    text('SCISSORS', width-padding, height/2);
  }
}
