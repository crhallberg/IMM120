int startTime = 0; // can be set to -5000 to not have a delay at start

void setup() {
  size(600, 600);
}

void draw() {
  background(200);
  if (millis()-startTime > 3000) { // delay of 3 seconds (in milliseconds)
    background(0);
  }
}

void mousePressed() {
  startTime = millis(); // reset timer
}