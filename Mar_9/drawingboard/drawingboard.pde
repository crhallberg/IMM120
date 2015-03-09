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
}

void keyPressed()
{
  background(255);
}

