PImage img;

void setup() {
  size(960, 540);
  img = loadImage("atat.jpg");
  img.resize(960, 540);
  img.loadPixels();
}

void draw() {
  // image(img, 0, 0);
  background(100, 0, 100);
  loadPixels();
  int mouseColor = img.get(mouseX, mouseY);
  for (int i=0; i<img.pixels.length; i++) {
    if (!colorsMatch(img.pixels[i], mouseColor)) {
      pixels[i] = img.pixels[i];
    }
  }
  updatePixels();
}

int threshold = 80;
boolean colorsMatch(int c1, int c2) {
  float diffRed = abs(red(c1)-red(c2));
  float diffGreen = abs(green(c1)-green(c2));
  float diffBlue = abs(blue(c1)-blue(c2));
  return diffRed+diffGreen+diffBlue < threshold;
}

void keyPressed() {
  if (keyCode == UP) {
    threshold += 10;
  }
  if (keyCode == DOWN) {
    threshold -= 10;
  }
  println(threshold);
}