int timerStart = -3000;
boolean timerDone = true;

void setup() {
  size(800, 600);
}
void draw() {
  background(200);
  if(millis()-timerStart > 3000) { // 3 seconds * 1000 milliseconds/second
    background(0, 0, 255);
    if (!timerDone) {
      background(255, 0, 0);
      timerDone = true;
    }
  }
}
void mousePressed() {
  timerStart = millis();
  timerDone = false;
}