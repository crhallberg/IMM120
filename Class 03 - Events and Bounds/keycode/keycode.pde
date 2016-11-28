int presses = 0;
int offset = 0;

void setup() {
  size(800, 200);
}

// GOAL
// SHOW ALL THE KEYS BEING PRESSED BEFORE RELEASE

void draw() {
  fill(0, 0, 0);
  textSize(100);
}

void keyPressed() {  
  text(key, offset, 100);
  offset = offset + 50;
}

void keyReleased() {
  background(200, 200, 200);
  offset = 0;
  println(keyCode);
}