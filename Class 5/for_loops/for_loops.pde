void setup() {
  size(800, 600);
  textSize(20);
}

void draw() {
  background(100);
  int w = 30; // width
  int g = 10; // gap
  int o = 10; // offset
  // Rows of windows
  for (int row = 0; row < 5; row += 1) {
    int h = 40; // height
    // Windows
    for (int count = 0; count < 20; count += 1) {
      fill(255);
      rect(count*(w+g)+o, row*(h+g)+o, w, h);
      fill(0);
      text(count, count * (w+g) + o, 40);
    }
  }
}