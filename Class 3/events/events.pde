int presses = 0;

void setup() {
  size(400, 400);
}

void draw() {
  background(200);
  if (keyPressed) {
  }
}

void keyPressed() {  
  background(0);
  presses = presses + 1;
  println(presses);
}

void keyReleased() {
}