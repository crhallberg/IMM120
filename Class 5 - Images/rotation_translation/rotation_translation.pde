PImage turtle;

void setup() {
  size(800, 800);
  turtle = loadImage("turtle.jpg");
}

void draw() {
  translate(200, 100);
  rotate(radians(45));
  image(turtle, 0, 0, turtle.width, turtle.height);
}