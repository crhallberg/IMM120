void setup() {
  size(300, 300);
}

void draw() {
  // Circle
  pushMatrix();
  translate(200, 200);
  rotate(-PI/4);
  fill(0, 0, 255);
  stroke(0, 255, 0);
  strokeWeight(10);
  ellipse(0, 0, 100, 50);
  popMatrix();
  
  // Square
  translate(100, 100);
  rotate(PI/4);
  fill(255, 0, 100);
  stroke(255, 0, 0);
  strokeWeight(10);
  rect(-50, -50, 100, 100);
}
