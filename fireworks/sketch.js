// Variables
var bombs = [];
var sparks = [];
var pmouseIsPressed = false;

// Runs once at start of code
function setup() {
  // Set size
  var canvas = createCanvas(windowWidth-100, windowHeight-10).parent('sketch');
}

function draw() {
  background(0,0,0,100);
  if(!pmouseIsPressed && mouseIsPressed) {
    bombs[bombs.length] = new Bomb(mouseX, mouseY);
  }
  for(var i=0;i<bombs.length;i++) {
    if(bombs[i].alive) {
      bombs[i].draw();
    }
  }
  for(var i=0;i<sparks.length;i++) {
    if(sparks[i].life > 0) {
      sparks[i].draw();
    }
  }
  pmouseIsPressed = mouseIsPressed;
}

function Bomb(tx, ty)
{
  this.x = width/2;
  this.y = height;
  this.tx = tx;
  this.ty = ty;
  this.alive = true;
  this.speed = 16; // The higher the slower
}
Bomb.prototype.draw = function() {
  fill(255);
  rect(this.x, this.y, 6, 6);

  // These lines create a smooth, slowing animation towards a point
  this.x += (this.tx-this.x)/this.speed;
  this.y += (this.ty-this.y)/this.speed;

  // When we're in position...
  if(dist(this.x, this.y, this.tx, this.ty) < 3) {
    var c = this.randomColor();
    print(c);
    //... make the sparks!
    for(var i=0;i<120;i++) {
      sparks[sparks.length] = new Spark(this.x, this.y, c);
    }
    this.alive = false;
  }
}
Bomb.prototype.randomColor = function() {
  var min = 100;
  var max = 255;
  return [random(min, max), random(min, max), random(min, max)];
}

function Spark(x, y, c)
{
  this.x = x;
  this.y = y;
  this.color = c;
  this.life = random(80, 130);
  var a = random(0, TWO_PI);
  var speed = random(1, 5);
  this.vx =  sin(a) * speed;
  this.vy = -cos(a) * speed;
}
Spark.prototype.draw = function() {
  fill(this.color);
  rect(this.x, this.y, 3, 3);
  this.x += this.vx;
  this.y += this.vy;
  this.vy += .05;
  this.life--;
}