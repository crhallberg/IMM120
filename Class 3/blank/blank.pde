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
  
  int steps = 15;
  x += (targetX - x) / steps;
}