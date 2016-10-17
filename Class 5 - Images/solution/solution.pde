boolean erasing = false;

int buttonX = 50;
int buttonY = 50;
int buttonSize = 50;

void setup() {
  size(600, 600);
  background(255);
}

void draw() {  
  stroke(0);
  strokeWeight(1);
  if (erasing) {
    fill(255);
  } else {
    fill(0);
  }
  ellipse(buttonX, buttonY, buttonSize, buttonSize);

  if (mousePressed) {
    drawLine();
  }
}

void mousePressed() {
  if (dist(mouseX, mouseY, buttonX, buttonY) < buttonSize/2) {
    erasing = !erasing;
  }
}

void keyPressed() {
  if (key == ' ') {
    background(255);
    erasing = false;
  }
}

void drawLine() {
  if (erasing) {
    stroke(255);
    strokeWeight(20);
  } else {
    stroke(0);
    strokeWeight(5);
  }
  line(pmouseX, pmouseY, mouseX, mouseY);
}