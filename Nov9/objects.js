// Variables
var objects = [];

var gravity = .2;

// Runs first and once
function setup() {
    createCanvas(640, 480); // size
}

// Loops forever
function draw() {
    background(200);
    
    for(var i=0; i<objects.length; i++) {
        var ball = objects[i];
        
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
}

function mousePressed() {    
    var circle = {
        x: mouseX,
        y: mouseY,
        xspeed: 2,
        yspeed: 3
    };
    objects.push(circle);
}
