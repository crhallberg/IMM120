PImage turtle;
PImage dice;

void setup() {
  size(620, 324);
  turtle = loadImage("turtle.jpg");
  dice = loadImage("dice.png");
}

void draw() {
  image(turtle, 0, 0, turtle.width, turtle.height);
  image(dice, mouseX - 200, mouseY - 200);
}