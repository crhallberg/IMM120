boolean blue = false;
boolean pmousePressed = false;

void setup() {
  size(600, 600);
}

void draw() {
  if (blue) {
    background(0, 0, 255);
  } else {
    background(0, 50, 0);
  }
  
  if (!pmousePressed && mousePressed) {
    blue = !blue;
  }
  
  pmousePressed = mousePressed;
}