int x, y;
int circleSize = 200;

void setup()
{
  size(800, 400);
  x = width/2;
  y = height/2;
  strokeWeight(10);
}

void draw()
{
  // Rectangle
  fill(255);  
  int rectX = 20;
  int rectY = 20;
  int rectW = 300;
  int rectH = 300;
  if (isInsideRect(x, y, rectX, rectY, rectW, rectH)) {
    fill(0, 255, 0);
  }
  rect(rectX, rectY, rectW, rectH);

  // Circle
  fill(255);
  if (dist(x, y, mouseX, mouseY) < circleSize/2) {
    fill(0, 0, 255);
  }
  ellipse(x, y, circleSize, circleSize);
  line(x, y, x+circleSize/2, y);
}

void keyPressed()
{
  // 38 == UP
  // 40 == DOWN
  // 37 == LEFT
  // 39 == RIGHT
  println(keyCode);
  if (keyCode == LEFT) { // Press LEFT arrow
    x = x - 20;
  }
  if (keyCode == RIGHT) { // Press RIGHT arrow
    x = x + 20;
  }
  if (keyCode == UP) { // Press UP arrow
    y = y - 20;
  }
  if (keyCode == DOWN) { // Press DOWN arrow
    y = y + 20;
  }
}

void mousePressed()
{
  boolean a = isInsideCircle(mouseX, mouseY, x, y, circleSize/2);
  if (a) {
    background(200);
  }
  /* ... */
  if (a) {
    fill(200);
  }
}

boolean isInsideCircle(float pointX, float pointY, float circleX, float circleY, float radius)
{
  boolean answer = dist(circleX, circleY, pointX, pointY) < radius;
  return answer;
}

boolean isInsideRect(float x, float y, float rectX, float rectY, float rectW, float rectH)
{
  boolean answer = x > rectX && y > rectY && x < rectX+rectW && y < rectY+rectH;
  return answer;
}

