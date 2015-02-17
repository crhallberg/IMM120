// Variables
var player;
var speed = 4;
var keys = [];

// Runs once at start of code
function setup() {
  // Set size
  var canvas = createCanvas(500, 500).parent('sketch');

  player = new Player(width/2, height/2);
  fill(0);
}

function draw() {
  background(255);
  player.draw();
}
function keyPressed(e) {
  keys[keyCode] = true;
}
function keyReleased(e) {
  keys[keyCode] = false;
}

function Player(sx, sy)
{
  this.x = sx;
  this.y = sy;
  this.speedX = 0;
  this.speedY = 0;
}
Player.prototype.draw = function() {
  this.speedX = 0;
  this.speedY = 0;
  if(keys[LEFT_ARROW] && !keys[RIGHT_ARROW]) {
    this.speedX = -speed;
  }
  if(keys[RIGHT_ARROW] && !keys[LEFT_ARROW]) {
    this.speedX = speed;
  }
  if(keys[UP_ARROW] && !keys[DOWN_ARROW]) {
    this.speedY = -speed;
  }
  if(keys[DOWN_ARROW] && !keys[UP_ARROW]) {
    this.speedY = speed;
  }
  this.x += this.speedX;
  this.y += this.speedY;
  ellipse(this.x, this.y, 50, 50);
}