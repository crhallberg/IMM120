boolean square = false;

void setup() {
  size(800, 600);
}

void draw() {
  background(255);
  fill(100);
  rect(150, 200, 200, 200);
  ellipse(550, 300, 200, 200);
  if (square) { // MOUSE IS IN SQUARE MODE
    // Turn red if touching the square
    if (isRectTouchingRect(/*rect1*/mouseX-25, mouseY-25, 50, 50, /*rect2*/150, 200, 200, 200)) {
      fill(255, 50, 50);
    }
    // Turn green if touching the circle
    if (isCircleTouchingRect(/*circle*/550, 300, 200, /*rect*/mouseX-25, mouseY-25, 50, 50)) {
      fill(50, 255, 50);
    }
    rect(mouseX-25, mouseY-25, 50, 50);
  } else { // CIRCLE MODE
    // Turn red if touching the square
    if (isCircleTouchingRect(/*circle*/mouseX, mouseY, 50, /*rect*/150, 200, 200, 200)) {
      fill(255, 50, 50);
    }
    // Turn green if touching the circle
    if (isCircleTouchingCircle(/*circle 1*/550, 300, 200, /*circle 2*/mouseX, mouseY, 50)) {
      fill(50, 255, 50);
    }
    ellipse(mouseX, mouseY, 50, 50);
  }

  // Show a blue circle if touching either shape with the mouse
  if (isPointInsideRect(mouseX, mouseY, 150, 200, 200, 200)
    || isPointInsideCircle(mouseX, mouseY, 550, 300, 200)) {
    fill(50, 50, 255);
    ellipse(mouseX, mouseY, 20, 20);
  }

  line(0, 0, mouseX, mouseY);
  PVector i = lineIntersection(/*line 1*/0, 0, mouseX, mouseY, /*line 2*/350, 200, 350, 400); // right side of the square
  if (null != i) {
    fill(255, 50, 50);
    ellipse(i.x, i.y, 10, 10);
  }
}



void keyPressed()
{
  square = !square;
}
void mousePressed()
{
  square = !square;
}

