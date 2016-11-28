int[] balls = new int[8];
int[] speeds = new int[8];

void setup() {
  size(360, 400);
  // Populate with initial
  for (int i=0; i<balls.length; i++) {
    balls[i] = 100;
    speeds[i] = 5;
  }
}

void draw() {
  background(0);

  for (int i=0; i<balls.length; i++) {
    ellipse((40*i)+40, balls[i], 20, 20);
    balls[i] += speeds[i];
    if (balls[i] < 0 || balls[i] > height) {
      speeds[i] *= -1;
    }
  }
}