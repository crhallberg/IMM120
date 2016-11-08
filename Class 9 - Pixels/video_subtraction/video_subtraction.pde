import processing.video.*;

Capture cam;

void setup() {
  size(640, 480);
  println(Capture.list());
  cam = new Capture(this);
  // cam = new Capture(this, width, height, fps); // 320, 240, 30 / 640, 480, 30
  cam.start();
}

void draw() {
  if (cam.available() == true) {
    cam.read();
  }
  image(cam, 0, 0);
  // Pixel analysis
  loadPixels();
  int mouseColor = cam.get(mouseX, mouseY);
  for (int i=0; i<cam.pixels.length; i++) {
    if (!colorsMatch(cam.pixels[i], mouseColor)) {
      pixels[i] = color(100);
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