void setup() {
  size(600, 600);
}

int march = 0;
void draw() {
  background(255);
  for (int y = march; y < height; y += 20) {
    line(0, y, width, y);
  }
  march += 1;
  if (march == 20) {
    march = 0;
  }
}