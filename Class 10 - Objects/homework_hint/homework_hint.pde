int[] positions = new int[8];
int[] speeds = new int[8];

Ball[] circles = new Ball[8];

class Ball {
  float y;
  float speed;
}

Ball makeBall() {
  Ball newBall = new Ball();
  newBall.y = 100;
  newBall.speed = 5;
  return newBall;
}

void setup() {
  size(360, 400);
  // Populate with initial values
  for (int i=0; i<positions.length; i++) {
    positions[i] = 100;
    speeds[i] = 5;
  }
}

void draw() {
  background(0);

  int x = 0;
  for (int i=0; i<positions.length; i++) {
    x += 40;
    ellipse(x, positions[i], 20, 20);
    positions[i] += speeds[i];
    if (positions[i] < 0 || positions[i] > height) {
      speeds[i] *= -1;
    }
  }
}