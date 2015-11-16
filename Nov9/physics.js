// Variables
var ballX = 400;
var ballY = 200;
var ballXSpeed = 2;
var ballYSpeed = 3;
var vAcc = 0;
var hAcc = 0;

// Runs first and once
function setup() {
    createCanvas(640, 480); // size
}

// Loops forever
function draw() {
    // background(200);
    
    ellipse(ballX, ballY, 100, 100);
    
    ballX += ballXSpeed;
    ballY += ballYSpeed;
    ballXSpeed += hAcc;
    ballYSpeed += vAcc;
    
    if (ballX > width || ballX < 0) {
        ballXSpeed = -ballXSpeed;
    }
    // Bounce
    if (ballY > height || ballY < 0) {
        ballYSpeed = -.8 * ballYSpeed;
    }
}

function mousePressed() {
    ballX = mouseX;
    ballY = mouseY;
}

function keyPressed() {
    if (keyCode == LEFT_ARROW) {
        hAcc = -.1;
    }
    if (keyCode == RIGHT_ARROW) {
        hAcc = .1;
    }
    if (keyCode == UP_ARROW) {
        vAcc = -.1;
    }
    if (keyCode == DOWN_ARROW) {
        vAcc = .1;
    }
}