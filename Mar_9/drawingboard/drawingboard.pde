void setup()
{
  size(600, 600);
  strokeWeight(5);
}

void draw()
{
  if (mousePressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  
  doThis(500, 300);
  int BIH = 7;
  doThis(BIH, mouseX);
}

void doThis(int x, int y) {
  // x exists in here and is equal to what you pass
  // y is the 2nd number
}

void keyPressed()
{
  background(255);
}

