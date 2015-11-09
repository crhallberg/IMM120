// Variables
var ballX = 400;
var ballY = 300;
var ballSize = 100;
var ballXSpeed = 0;
var ballYSpeed = 0;
var gravity = .2;

// Runs first and once
function setup() {
    createCanvas(640, 480); // size
}

// Loops forever
function draw() {
    background(0);

    ballX += ballXSpeed;
    ballY += ballYSpeed;
    ballYSpeed -= gravity;

    ellipse(ballX, ballY, ballSize, ballSize);

    if (ballY > height) {
        ballYSpeed = -.7 * ballYSpeed; // Bounce
        ballY = height;
    }
}

function mousePressed() {
    ballX = mouseY;
    ballY = mouseY;
    ballXSpeed = 0;
    ballYSpeed = 0;
}
