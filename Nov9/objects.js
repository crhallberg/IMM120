// Variables
var objects = [];
var ball = {
    x: 400,
    y: 200,
    xspeed: 2,
    yspeed: 3
};

var gravity = .2;

// Runs first and once
function setup() {
    createCanvas(640, 480); // size
}

// Loops forever
function draw() {
    background(200);
    
    ellipse(ball.x, ball.y, 100, 100);
    
    ball.x += ball.xspeed;
    ball.y += ball.yspeed;
    ball.yspeed += gravity;
    
    if (ball.x > width || ball.x < 0) {
        ball.xspeed = -ball.xspeed;
    }
    // Bounce
    if (ball.y > height || ball.y < 0) {
        ball.yspeed = -.8 * ball.yspeed;
    }
}

function mousePressed() {
    ball.x = mouseX;
    ball.y = mouseY;
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