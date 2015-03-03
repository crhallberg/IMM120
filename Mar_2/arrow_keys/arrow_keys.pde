int x, y;

void setup()
{
  size(800, 400);
  x = width/2;
  y = height/2;
  strokeWeight(10);
}

void draw()
{
  background(180);
  ellipse(x, y, 200, 200);
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
  if(keyCode == UP) { // Press UP arrow
    y = y - 20;
  }
  if(keyCode == DOWN) { // Press DOWN arrow
    y = y + 20;
  }
}

void mousePressed()
{
  
}
