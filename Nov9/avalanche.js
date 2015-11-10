// Variables
var objects = [];
objects[0] = new Ball(400, 300, 100);
var gravity = .2;

// Runs first and once
function setup() {
    createCanvas(640, 480); // size
}

// Loops forever
function draw() {
    background(0);

    for(var i=0; i<objects.length; i++) {
        objects[i].draw( i );
    }
    
    objects.push(new Ball(random(0, width), 100, random(50, 200)));
}

function keyPressed() {   
    objects.push(new Ball(mouseX, mouseY, random(20, 200))); 
    
    for(var i=0; i<objects.length; i++) {
        objects[i].jump();
    }
}

// Ball template (class)
function Ball(x, y, s) {
    this.x = x;
    this.y = y;
    this.size = s;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.onGround = false;
    
    this.jump = function() {        
        if (this.onGround) {
            this.ySpeed = -this.size / 20;
            this.onGround = false;
        }
    }
    
    this.draw = function (index) {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        this.ySpeed += gravity;

        if (this.onGround) {
            fill('lightgreen');
        } else {
            fill('white');
        }
        // is mouse inside circle
        if (dist(mouseX, mouseY, this.x, this.y) < this.size/2) {
            fill('yellow');
            if (isMousePressed) {
                objects.splice(index, 1);
            }
        }
        ellipse(this.x, this.y, this.size, this.size);

        if (this.y+this.size/2 > height) {
            if (this.ySpeed < 2) {
                this.ySpeed = 0;
                this.onGround = true;
            }
            this.ySpeed = -.7 * this.ySpeed; // Bounce
            this.y = height-this.size/2;
        }
    }
}
