// Variables
var bob;
var speed = 5;

// Load images and sounds
function preload() {
}

// Run once at the start
function setup() {
  var canvas = createCanvas(600, 400);
  canvas.parent('sketch');

  bob = new Ball();
}

// Run forever after setup
function draw() {
  background(0);
  bob.draw();
}

function Ball() {
  this.reset();
}
Ball.prototype.reset = function() {
  this.x = width/2;
  this.y = height/2;
  if(random(0,100) > 50) {
    this.speedx = speed;
  } else {
    this.speedx = -speed;
  }
  this.speedy = speed * random(-3, 3);
}
Ball.prototype.draw = function() {
  fill(255);
  ellipse(this.x, this.y, 50, 50);

  this.x += this.speedx;
  this.y += this.speedy;
  if(this.x < 0 || this.x > width) {
    this.reset();
  }
  if(this.y < 0 || this.y > height) this.speedy = -this.speedy;
}