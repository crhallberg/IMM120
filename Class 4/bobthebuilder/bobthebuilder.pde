void setup() {
  size(640, 480);
  noStroke();
}

void draw() {
  background(100, 150, 255);
  fill(100, 255, 100);
  rect(0, height-100, width, height-100);
  buildMeAHouse(80, 280, 200, 180);
  buildMeAHouse(360, 310, 300, 90);
}

void buildMeAHouse(int x, int y, int w, int h) {
  // int x = 100
  // int y = 210
  fill(198, 147, 27);
  rect(x, y, w, h);
  triangle(x, y, x+w, y, x+(w/2), y-(h/4));
  fill(234, 181, 56);
  rect(x+(w/2)-20, y+h-60, 40, 60);
}