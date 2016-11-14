Circle[] dots;

void setup() {
  size(800, 800);
  dots = new Circle[2];
  dots[0] = makeCircle(300, 600, 100);
  dots[1] = makeCircle(0, 0, 300);
  dots[2] = makeCircle(700, 100, 70);
  noCursor();
}

void draw() {
  background(0, 50, 100);

  for (int i=0; i<dots.length; i++) {
    ellipse(dots[i].x, dots[i].y, dots[i].size, dots[i].size);
  }
}

Circle makeCircle(float x, float y, float s) {
  Circle n = new Circle();
  n.x = x;
  n.y = y;
  n.size = s;
  return n;
}