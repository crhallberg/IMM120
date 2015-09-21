// Variables

// Runs first and once
function setup() {
  createCanvas(800, 400); // size
  background(255);
  fill(0);
  textSize(45);
}

// Loops forever
function draw() {
  // We're not looping any drawing
}

function keyPressed() {
  // RESET
  if (key === ' ') {
    background(255);
  }
  // LEFT SIDE
  textAlign(LEFT);
  var padding = 10;
  if (key === 'A') {
    text('ROCK', padding, 150);
  }
  if (key === 'S') {
    text('PAPER', padding, 200);
  }
  if (key === 'D') {
    text('SCISSORS', padding, 250);
  }
  // RIGHT SIDE
  textAlign(RIGHT);
  var padding = 10;
  if (key === 'J') {
    text('ROCK', width-padding, 150);
  }
  if (key === 'K') {
    text('PAPER', width-padding, 200);
  }
  if (key === 'L') {
    text('SCISSORS', width-padding, 250);
  }
}