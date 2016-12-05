Mover dart = null;

void setup() {
  size(600, 600);
}

void draw() {
  background(200);
  
  if (dart != null) {
    ellipse(dart.x, dart.y, 10, 10);
    updateMover(dart);
  }
  
  ellipse(width/2, height/2, 10, 10);
  float angle = atan2(mouseY-height/2, mouseX-width/2);
  translate(width/2, height/2);
  strokeWeight(1);
  line(0, 0, 100*cos(angle), 0);
  line(0, 0, 0, 100*sin(angle));
  rotate(angle);
  strokeWeight(5);
  line(0, 0, 100, 0);
}

void mousePressed() {
  float angle = atan2(mouseY-height/2, mouseX-width/2);
  int magnitude = 5;
  dart = new Mover();
  dart.x = width/2;
  dart.y = height/2;
  dart.speedX = magnitude * cos(angle);
  dart.speedY = magnitude * sin(angle);
}