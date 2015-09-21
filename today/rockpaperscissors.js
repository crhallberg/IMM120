// Variables
var rock; // declaring

// Runs first and once
function setup() {
    createCanvas(800, 400); // size
    background(255);
    fill(0);
    textSize(45);

    rock = loadImage('rock.png');
}

// Loops forever
function draw() {
    // We're not looping any drawing
    push(); // save
    translate(400, 100); // move into position
    rotate(HALF_PI); // rotate
    image(rock, 0, 0, 200, 250); // draw
    pop(); // restore
    text('apple', 0, 200);
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
        text('ROCK', width - padding, 150);
    }
    if (key === 'K') {
        text('PAPER', width - padding, 200);
    }
    if (key === 'L') {
        text('SCISSORS', width - padding, 250);
    }
}