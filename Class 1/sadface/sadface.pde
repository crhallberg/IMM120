void setup() {
  size(300, 300);
  background(0);
  noStroke(); // no outlines, please
}

void draw() {
  println(mouseX);

  // Set the color depending on where the mouse is
  fill(mouseX, mouseY, 0);
  // Draw a circle where the mouse is
  ellipse(mouseX, mouseY, 50, 50);

  fill(0);
  // Left eye
  triangle(50, 50, 140, 90, 60, 90);
  ellipse(100, 100, 50, 50);
  // Right eye
  triangle(width-50, 50, width-140, 90, width-60, 90);
  ellipse(200, 100, 50, 50);
  // Nose
  rect(140, 140, 20, 20);
  // Mouth
  triangle(50, 180, width-50, 180, 150, 240);
}
/*
 syntax - sentence structure and punctuation
 semantics - logic/meaning of a program
 */