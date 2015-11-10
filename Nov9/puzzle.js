// Variables
var ball = new Ball(400, 300, 100);
var gravity = .2;

// Runs first and once
function setup() {
    createCanvas(640, 480); // size
}

// Loops forever
function draw() {
    background(0);

    ball.draw();
}

function mousePressed() {
    ball.x = mouseX;
    ball.y = mouseY;
    ball.xSpeed = 0;
    ball.ySpeed = 0;
}

// Ball template (class)
function Ball(x, y, s) {
    this.x = x;
    this.y = y;
    this.size = s;
    this.xSpeed = 0;
    this.ySpeed = 0;
    
    this.draw = function () {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        this.ySpeed += gravity;

        ellipse(this.x, this.y, this.size, this.size);

        if (this.y > height) {
            this.ySpeed = -.7 * this.ySpeed; // Bounce
            this.y = height;
        }
    }
}
