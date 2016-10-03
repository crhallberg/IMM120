float x = 100;
float speedX = 0;
float accX = 0;

float y = 100;
float speedY = 0;

float gravity = .5;
float friction = .98;

void setup() {
  size(800, 600);
}

void draw() {
  background(200);
  ellipse(x, y, 50, 50);

  speedX = speedX + accX;
  speedX = friction * speedX;

  if (y > height - 25) { //<>//
    speedY = speedY * -1;
  } else {
    speedY = speedY + gravity; // accY
  }

  x = x + speedX;
  y = y + speedY;
  
  accX += .001;
}

void keyPressed() {
  if (keyCode == LEFT) {
    speedX = -10;
  }
}