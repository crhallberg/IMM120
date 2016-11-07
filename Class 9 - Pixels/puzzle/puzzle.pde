int[] circleX = new int[100];
int[] circleY;
int circleSize = 100;

void setup() {
  size(800, 600);
  for (int i=0; i<circleX.length; i+=10) {
    circleX = floor(random(50, width-50));
  }
  circleY = {7, 45, 3, 5, 1, 96, 2, 45, 3, 6, 5, 83, -10, 30, 41, 41, 7, 45, 3, 5, 1, 96, 2, 45, 3, 6, 5, 83, -10, 30, 41, 41, 7, 45, 3, 5, 1, 96, 2, 45, 3, 6, 5, 83, -10, 30, 41, 41, 7, 45, 3, 5, 1, 96, 2, 45, 3, 6, 5, 83, -10, 30, 41, 41, 7, 45, 3, 5, 1, 96, 2, 45, 3, 6, 5, 83, -10, 30, 41, 41, 7, 45, 3, 5, 1, 96, 2, 45, 3, 6, 5, 83, -10, 30, 41, 41, 7, 45, 3, 5, 1, 96, 2, 45, 3, 6, 5, 83, -10, 30, 41, 41};
}

void draw() {
  background(200);
  for (int i=0; i<circleX; i+=1) {
    fill(255);
    if (mouseOverCircle(circleX, circleY[i])) {
      fill(0, 100, 255);
    }
    ellipse(circleX[0], circleY[0], circleSize, circleSize);
  }
}

boolean mouseOverCircle(int circleX, int circleY) {
  return dist(mouseX, mouseY, circleX, circleY) < circleSize/2;
}