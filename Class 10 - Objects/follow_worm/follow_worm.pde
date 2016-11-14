Circle[] circles;

void setup() {
  size(800, 800);
  circles = new Circle[0];
  strokeWeight(10);
}

void draw() {
  background(0, 50, 200);
  stroke(0);
  for (int i=0; i<circles.length; i++) {
    if (circles[i].size > 0) {
      ellipse(circles[i].x, circles[i].y, circles[i].size, circles[i].size);
      circles[i].size --;
    }
  }
  noStroke();
  for (int i=0; i<circles.length; i++) {
    if (circles[i].size > 0) {
      ellipse(circles[i].x, circles[i].y, circles[i].size, circles[i].size);
      circles[i].size --;
    }
  }
  circles =(Circle[]) append(circles, new Circle(mouseX, mouseY));
  if (circles.length > 100) {
    circles =(Circle[]) subset(circles, 1);
  }
}