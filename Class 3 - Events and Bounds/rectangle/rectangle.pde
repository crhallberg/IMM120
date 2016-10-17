/**
 * Function for determining if something is inside a rectangle or not
 */
int rectX = 400;
int rectY = 100;
int rectWidth = 100;
int rectHeight = 400;

void setup() {
  size(600, 600);
}

void draw() {
  background(200);
  fill(255);
  rect(rectX, rectY, rectWidth, rectHeight);
  rect(100, rectY, rectWidth, rectHeight);
  rect(220, rectY, rectWidth, rectHeight);
  
  if ( isInsideRect(100) || isInsideRect(220) || isInsideRect(rectX) ) {
    fill(0, 0, 255);
  } else {
    fill(50);
  }
  ellipse(mouseX, mouseY, 50, 50);
}

boolean isInsideRect(float rx, float ry) {
  if (mouseX > rx && mouseX < rx + rectWidth && mouseY > rectY && mouseY < rectY + rectHeight) {
    return true;
  } else {
    return false;
  }
}