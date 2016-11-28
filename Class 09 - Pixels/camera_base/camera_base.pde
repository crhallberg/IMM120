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
}