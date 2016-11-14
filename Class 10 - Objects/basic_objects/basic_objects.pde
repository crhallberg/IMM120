Circle test;
Circle two;

void setup() {
  size(800, 800);
  test = makeCircle(300, 600, 100);
    
  two = makeCircle(0, 0, 300);
}

void draw() {
  background(0, 50, 100);
  
  ellipse(test.x, test.y, test.size, test.size);
  ellipse(two.x, two.y, two.size, two.size);
}

Circle makeCircle(float x, float y, float s) {
  Circle n = new Circle();
  n.x = x;
  n.y = y;
  n.size = s;
  return n;
}