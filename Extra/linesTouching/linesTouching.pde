void setup() {
  size(600, 600);
  strokeWeight(5);
}

void draw() {
  background(200);
  stroke(0);
  if (linesTouching( 100,100,400,300 , 200,500,mouseX,mouseY )) {
    stroke(255,0,0);
  }
  line(100, 100, 400, 300);
  line(200, 500, mouseX, mouseY);
}

boolean linesTouching(float x1, float y1, float x2, float y2, float x3, float y3, float x4, float y4) {
  float denominator = ((x2 - x1) * (y4 - y3)) - ((y2 - y1) * (x4 - x3));
  float numerator1 = ((y1 - y3) * (x4 - x3)) - ((x1 - x3) * (y4 - y3));
  float numerator2 = ((y1 - y3) * (x2 - x1)) - ((x1 - x3) * (y2 - y1));

  // Detect coincident lines (has a problem, read below)
  if (denominator == 0) return numerator1 == 0 && numerator2 == 0;

  float r = numerator1 / denominator;
  float s = numerator2 / denominator;

  return (r >= 0 && r <= 1) && (s >= 0 && s <= 1);
}