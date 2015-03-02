int x;

void setup()
{
  size(800, 400);
  x = width/2;
}

void draw()
{
}

void keyPressed()
{
  // 38 == UP
  // 40 == DOWN
  // 37 == LEFT
  // 39 == RIGHT
  println(keyCode);
  if(keyCode == RIGHT) {
    background(0);
  }
}
