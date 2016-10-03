/** //<>//
 * Keeping a bouncing ball inside a rectangle
 */
float x = 400;
float speedX = 0;
float accX = 0;

float y = 300;
float speedY = 0;

float gravity = .5;
float friction = .98;

void setup() {
  size(600, 600);
}

void draw() {
  background(200);

  int rectX = 100;
  int rectY = 100;
  int rectWidth = 400;
  int rectHeight = 400;
  rect(rectX, rectY, rectWidth, rectHeight);

  ellipse(x, y, 50, 50);

  // Only accelerate if not bouncing
  if (x < rectX || x > rectX + rectWidth) {
    speedX = speedX * -1;
  } else {
    speedX = speedX + accX; // accelaration X
  }

  if (y < rectY || y > rectY + rectHeight) {
    speedY = speedY * -1;
  } else {
    speedY = speedY + gravity; // accelaration Y
  }

  x = x + speedX;
  y = y + speedY;

  accX += .001; // wind
}

void keyPressed() {
  if (keyCode == LEFT) {
    speedX = -10;
  }
}