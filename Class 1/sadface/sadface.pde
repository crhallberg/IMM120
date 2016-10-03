void setup() {
  size(300, 300);
  background(0);
}

void draw() {
  println(mouseX);
  
  //background(mouseX, mouseY, 0);
  noStroke();
  fill(255, 255, 0);
  fill(0);
  ellipse(100, 100, 50, 50); // left eye

  fill(255, 0, 0);
  fill(0);
  ellipse(200, 100, 50, 50);

  triangle(50, 50, 140, 90, 60, 90);
  triangle(width-50, 50, width-140, 90, width-60, 90);
  rect(140, 140, 20, 20);
  triangle(50, 180, width-50, 180, 150, 240);
  
  fill(mouseX, mouseY, 0);
  ellipse(mouseX, mouseY, 50, 50);
}
/*
syntax - sentence structure and punctuation
 semantics - logic/meaning of a program
 println();
 
 
 
 fill(255);
 stroke(0);
 triangle(50, 125, 100, 150, 50, 200);
 triangle(50, 200, 75, 225, 100, 150);
 */