PImage spring;

void setup() {
  size(600, 505);
  spring = loadImage("spring.jpg");
}

void draw() {
  image(spring, 0, 0);
  loadPixels();
  color m = get(mouseX, mouseY);
  for (int i=0; i<pixels.length; i++) {
    if (!colorMatch(pixels[i], m)) {
      pixels[i] =(int) color(brightness(pixels[i]));
    }
  }
  updatePixels();
}

int threshold = 70;
boolean colorMatch(color c1, color c2) {
  float diffRed = abs(red(c1)-red(c2));
  float diffGreen = abs(green(c1)-green(c2));
  float diffBlue = abs(blue(c1)-blue(c2));
  return (diffRed+diffGreen+diffBlue) < threshold;
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