float x = 100; //<>//
float speedX = 0;
float accX = 0;

float y = 100;
float speedY = 0;

float gravity = .72;
float friction = .98;

void setup() {
  size(600, 600);
}

void draw() {
  render();
  move();
  bounce();
  if (keyPressed) {
    wind();
  }
}

void render() {
  background(200);
  ellipse(x, y, 50, 50);
}
void move() {
  speedX = speedX + accX;
  speedX = friction * speedX;
  if (y + 25 < height) {
    speedY = speedY + gravity; // accY
  }
  x = x + speedX;
  y = y + speedY;
}

void bounce() {
  if (y + 25 >= height) {
    speedY = speedY * -1;
  }
  if (x + 25 >= width) {
    speedX = speedX * -1;
  }
}

void wind() {
  accX += .001;
}

void keyPressed() {
  if (keyCode == LEFT) {
    speedX = -10;
  }
}