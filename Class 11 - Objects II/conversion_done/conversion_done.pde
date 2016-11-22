Ball[] circles = new Ball[8];

class Ball {
  float x;
  float y;
  float speed;
}

Ball makeBall(float x) {
  Ball newBall = new Ball();
  newBall.x = x;
  newBall.y = 100;
  newBall.speed = 5;
  return newBall;
}

void setup() {
  size(360, 400);
  // Populate with initial values
  int pos = 0;
  for (int i=0; i<circles.length; i++) {
    pos += 40;
    circles[i] = makeBall(pos);
  }
}

void draw() {
  background(0);

  int x = 0;
  for (int i=0; i<circles.length; i++) {
    x += 40;
    ellipse(circles[i].x, circles[i].y, 20, 20);
    circles[i].y += circles[i].speed;
    if (circles[i].y < 0 || circles[i].y > height) {
      circles[i].speed *= -1;
    }
  }
}