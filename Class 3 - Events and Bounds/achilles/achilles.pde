/**
 * How to move an object towards a target in a smooth way
 */
float x = 100;
float y = 100;

float targetX = 400;
float targetY = 500;

void setup() {
  size(600, 600);
}

void draw() {
  background(200);
  fill(255);
  ellipse(x, y, 50, 50);

  fill(255, 0, 0);
  ellipse(targetX, targetY, 10, 10);

  int steps = 10; // the more steps, the slower
  x += (targetX - x) / steps;
  y += (targetY - y) / steps;

  // Move the target to where the mouse is
  if (mousePressed) {
    targetX = mouseX;
    targetY = mouseY;
  }
}