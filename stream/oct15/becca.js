// Variables
var player;
var ball1, ball2;
var speed = 4;
var laser;

function preload()
{
  laser = loadSound("./laser.ogg");
}

// Runs once at start of code
function setup()
{
  // Set size
  var canvas = createCanvas(500, 500);
  canvas.parent('sketch');
  player = new Player(width/2, 50);
  ball1 = new Ball(0,60,15,10);
  ball2 = new Ball(300,70,10,15);
}

function keyPressed(e)
{
  e.preventDefault();
  if(keyCode == UP_ARROW)
  {
    player.speedY = -speed;
  }
  if(keyCode == DOWN_ARROW)
  {
    player.speedY = speed;
  }
}

function keyReleased(e)
{
  player.speedX = 0;
  player.speedY = 0;
}

function Player(sx, sy)
{
  this.x = sx;
  this.y = sy;
  this.speedX = 0;
  this.speedY = 0;
}

function Ball(x,y,sx,sy)
{
  this.x = x;
  this.y = y;
  this.speedx = sx;
  this.speedy = sy;
}

function insideRectangle(checkX, checkY, rectX, rectY, rectW, rectH)
{
  return checkX > rectX && checkX < rectX+rectW && checkY > rectY && checkY < rectY+rectH;
}

function insideCircle(x, y, circleX, circleY, circleR)
{
  return dist(x,y,circleX,circleY) < circleR/2;
}

function draw()
{
   background(200, 225, 255);
   noStroke();
   rect(width/2, -3,50, 600);
   fill(200,225,255);
   player.draw();
   fill(200,60,10);
   ball1.draw();
   fill(140,60,10);
   ball2.draw();


   if(insideCircle(ball1.x,ball1.y, ball2.x,ball2.y, 50))
   {
    ball1.speedx= -ball1.speedx;
    ball1.speedy= -ball1.speedy;
    ball2.speedx= -ball2.speedx;
    ball2.speedy= -ball2.speedy;
   }
}

Player.prototype.draw = function()
{
  this.x += this.speedX;
  this.y += this.speedY;
  rect(this.x, this.y, 50, 100);
}

Ball.prototype.draw = function()
{
  this.x = this.x + this.speedx;
  this.y += this.speedy;

  if(!insideRectangle(this.x, this.y, 0, 0, width, height))
  {
    if(this.x < 0 || this.x > width)
    {
      this.speedx = -this.speedx;
      laser.play();
    }

    if(this.y < 0 || this.y > height)
    {
      this.speedy = -this.speedy;
      laser.play();
    }
  }

  // Vertically aligned with column
  if (this.x > player.x && this.x < player.x + 50) {
    // Not in the gap
    if (!insideRectangle(this.x, this.y, player.x, player.y, 50, 100)) {
      // laser.play();
      this.speedx = -this.speedx;
    }
  }
  ellipse(this.x, this.y, 40, 40);
}