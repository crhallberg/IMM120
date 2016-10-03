/**
 * Intro to loops
 */
float rectX;
float rectY;

void setup() {
  size(640, 480);
  background(200);
  noLoop(); // only run draw() once
}

void draw() {
  int count = 0; // counter
  while (count < 4000) {
    float insideX = random(0, width);
    float insideY = random(0, height);
    float outsideX = random(0, width);
    float outsideY = random(0, height);
    // Try again, and again, and again...
    while (dist(insideX, insideY, outsideX, outsideY) > 100) {
      outsideX = random(0, width);
      outsideY = random(0, height);
    }
    line(insideX, insideY, outsideX, outsideY);

    count += 1;
  }
}