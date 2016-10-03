void setup() {
  size(400, 400);
}

int circleX = 200;
int circleY = 200;
int diameter = 200;
int radius = diameter / 2;
void draw() {
  ellipse(circleX, circleY, diameter, diameter);
  int x = -radius;
  while (x <= radius) {
    float h = sqrt(radius*radius - x*x);
    line(circleX+x, circleY-h, circleX+x, circleY+h);
    x += 10;
  }
  println(color(244, 14, 33));
}