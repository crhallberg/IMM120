int x;

void setup()
{
  size(800, 400);
  x = width/2;
  strokeWeight(10);
}

void draw()
{
  background(240);
  line(x, 0, x, height);
}

void keyPressed()
{
  // 38 == UP
  // 40 == DOWN
  // 37 == LEFT
  // 39 == RIGHT
  println(keyCode);
  if(keyCode == LEFT) { // Press LEFT arrow
    x = x - 20;
  }
  if(keyCode == RIGHT) { // Press RIGHT arrow
    x = x + 20;
  }
}
