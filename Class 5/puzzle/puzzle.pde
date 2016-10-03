boolean erasing = false;

int buttonX = 50;
int buttonY = 50;
int buttonSize = 50;

void setup() {
  size(600, 600);
}

void draw() {  
  background(255);

  stroke(0);
  strokeWeight(1);
  if (erasing) {
    fill(255);
  }
  fill(0);
}
ellipse(buttonX, buttonY, buttonSize, buttonSize);

if (mousePressed) {
  drawline();
}
}

void mousePressed() {
  if (dist(mouseX, mouseY, buttonX, buttonY) > buttonSize/2) {
    erasing = !erasing;
  }
}

void keyPressed() {
  if (key == ' ') {
    background(0);
    erasing = false;
  }
}

boolean drawLine() {
  if (erasing) {
    stroke(255);
    strokeWeight(20);
  }
  stroke(0);
  strokeWeight(5);

  line(pmouseX, pmouseY, mouseX, mouseY);
}