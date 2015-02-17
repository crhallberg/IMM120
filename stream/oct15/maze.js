// Variables
var player;
var speed = 3;



// Runs once at start of code


function setup() {
  // Set size
  var canvas = createCanvas(600, 600).parent('sketch');

  player = new Player(50, 120);

  // Here, I draw the maze before we enter the draw loop.
  background(255);
  drawMaze();

  // Then I save all the color data to the array 'pixels' using this function
  loadPixels();
}

function draw() {
  background(255);

  drawMaze();

  player.draw();
}

// I moved this to a function so I wouldn't have to copy it all
function drawMaze() {
  strokeWeight(5);

  line(275, 250, 275, 100);
  line(320, 250, 320, 150);
  line(275, 100, 550, 100);
  line(320, 150, 400, 150);
  line(400, 150, 400, 200);
  line(400, 200, 370, 200);
  line(370, 200, 370, 250);
  line(370, 250, 450, 250);
  line(450, 250, 450, 100);


  line(225, 250, 275, 250);
  line(225, 300, 275, 300);
  line(225, 150, 225, 250);
  line(225, 300, 225, 400);
  line(175, 100, 175, 450);

  line(175, 100, 275, 100);
  line(175, 450, 275, 450);
  line(275, 450, 275, 350);
  line(275, 350, 450, 350);
  line(275, 300, 500, 300);
  line(500, 150, 500, 450);
  line(450, 350, 450, 400);
  line(500, 450, 350, 450);
  line(450, 400, 325, 400);

  line(350, 450, 350, 500);
  line(350, 500, 350, 450);
  line(350, 500, 125, 500);
  line(125, 500, 125, 50);
  line(125, 50, 600, 50);

  line(550, 100, 550, 500);
  line(600, 0, 600, 600);
  line(0, 600, 0, 0);
  line(0, 0, 600, 0);
  line(600, 600, 0, 600);

  line(550, 500, 400, 500);
  line(400, 500, 400, 550);
  line(400, 550, 75, 550);
  line(75, 550, 75, 100);

  line(75, 100, 25, 100);
  line(25, 0, 25, 600);
  line(75, 100, 75, 50);

  line(450, 600, 450, 550)
  line(450, 550, 550, 550)
}


function keyPressed() {

  if (keyCode == UP_ARROW) {
    player.speedY = -speed;
  }
  if (keyCode == DOWN_ARROW) {
    player.speedY = speed;
  }
  if (keyCode == LEFT_ARROW) {
    player.speedX = -speed;
  }
  if (keyCode == RIGHT_ARROW) {
    player.speedX = speed;
  }

}

function keyReleased(e) {
  player.speedX = 0;
  player.speedY = 0;
}

function Player(sx, sy) {
  this.x = sx;
  this.y = sy;
  this.speedX = 0;
  this.speedY = 0;
}
Player.prototype.draw = function () {

  if(!this.movingOntoBlack()) {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  fill(0);
  noStroke();
  ellipse(this.x, this.y, 20, 20);
}
// Check if we're going to move onto a black pixel - ONLY CHECKS RIGHT SIDE <--
Player.prototype.movingOntoBlack = function() {
  return getColor(this.x+10+this.speedX, this.y) == 0;
}

// Return the red value of the color at a location in the sketch. All we need to test if it's black (0) or white (255)
function getColor(x, y) {
  x = floor(x);
  y = floor(y);
  return pixels[((y*width)+x)*4];
}