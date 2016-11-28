int x = 100;
int y = 100;
float speedX = 3;
float speedY = 3;

void setup() {
  size(640);
}

void Draw() {
  background(200);
  ellipse(x, x, 50, 50);
  
  x += speedX;
  y += speedY;
  
  if (x < 0 || x > width) {
    speedY = -speedY;
  }
  if (y < 0 || y > width) {
    speedY = -speedY;
  }
}