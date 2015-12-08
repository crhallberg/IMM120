// Variables
var x = 300;
var y = 300;
var xSpeed = 0;
var ySpeed = 0;
var gravity = .6;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background('skyblue');

    if (isKeyPressed) {
        var force = .2;
        if (keyCode === LEFT_ARROW) {
            fill('red');
            xSpeed = xSpeed - force;
        } else if (keyCode === RIGHT_ARROW) {
            fill('blue')
            xSpeed = xSpeed + force;
        } else if (y+50 > height-20 && keyCode === UP_ARROW) {
            fill('yellow')
            ySpeed = -5;
        } else {
            fill('white')
        }
    }

    ellipse(x, y, 100, 100);

    // Change position
    x = x + xSpeed;
    y = y + ySpeed;
    // Limit position
    if (x-50 < 0 || x+50 > width) {
        xSpeed = -xSpeed;
    }
    if (y+50 > height) {
        y = height-50;
        ySpeed = -ySpeed * .8;
    }
    // Gravity - change speed
    ySpeed = ySpeed + gravity;
    // Friction - limit speed
    xSpeed *= .98;

    if (isMousePressed) {
        x = mouseX;
        y = mouseY;
        xSpeed = mouseX - pmouseX;
        ySpeed = mouseY - pmouseY;
    }
}

function keyPressed() {
    if (key === ' ') {
        ySpeed -= 30;
    }
}
