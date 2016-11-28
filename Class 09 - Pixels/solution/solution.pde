int[] circleX = new int[100];
int[] circleY;
int circleSize = 100;

void setup() {
  size(800, 600);
  circleY = new int[100];
  for (int i=0; i<circleX.length; i+=1) {
    circleX[i] = floor(random(50, width-50));
    circleY[i] = floor(random(50, height-50));
  }
}

void draw() {
  background(200);
  for (int i=0; i<circleX.length; i+=1) {
    fill(255);
    if (mouseOverCircle(circleX[i], circleY[i])) {
      fill(0, 100, 255);
    }
    ellipse(circleX[i], circleY[i], circleSize, circleSize);
  }
}

boolean mouseOverCircle(int circleX, int circleY) {
  return dist(mouseX, mouseY, circleX, circleY) < circleSize/2;
}