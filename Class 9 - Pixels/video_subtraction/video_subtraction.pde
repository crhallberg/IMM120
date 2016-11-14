import processing.video.*;

Capture cam;
PImage bg, spring;

void setup() {
  size(640, 480);
  println(Capture.list());
  cam = new Capture(this, 640, 480, 15); // 320, 240, 30 / 640, 480, 30
  cam.start();
  spring = loadImage("spring.jpg");
  loadPixels();
}

void draw() {
  if (cam.available() == true) {
    cam.read();
  }
  if (bg == null) {
    image(cam, 0, 0);
  } else {
    image(spring, 0, 0, width, height);
    // Pixel analysis
    for (int i=0; i<cam.pixels.length; i++) {
      if (!colorsMatch(cam.pixels[i], bg.pixels[i])) {
        pixels[i] = cam.pixels[i];
      }
    }
    updatePixels();
  }
}

int threshold = 80;
boolean colorsMatch(int c1, int c2) {
  float diffRed = abs(red(c1)-red(c2));
  float diffGreen = abs(green(c1)-green(c2));
  float diffBlue = abs(blue(c1)-blue(c2));
  return diffRed+diffGreen+diffBlue < threshold;
}

void mousePressed() {
  bg = cam.copy();
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