int x = 100;
int y = 100;
int speedX = 3;
int speedY = 3;

void setup() {
  size(300, 480);
}

void draw() {
  background(200);
  ellipse(x, y, 50, 50);
  
  x += speedX;
  y += speedY;
  
  if (x < 0 || x > width) {
    speedX = -speedX;
  }
  if (y < 0 || y > height) {
    speedY = -speedY;
  }
}