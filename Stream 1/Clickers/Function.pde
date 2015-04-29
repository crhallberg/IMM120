void drawCircle(int cx, int cy, int number) {
  // Draw the circle
  fill(200, 200, 255);
  ellipse(cx, cy, radius*2, radius*2);
  fill(0);
  text(number+"!", cx, cy);
}
