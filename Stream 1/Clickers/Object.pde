class Clicker
{
  int x, y, speedX, speedY, clicks;

  Clicker(int posX, int posY) { // setup
    this.x = posX;
    this.y = posY;
    this.speedX = floor(random(-speed, speed));
    this.speedY = floor(random(-speed, speed));
    this.clicks = 0;
  }

  void move() {
    // Move the circle
    x += speedX;
    y += speedY;
    if (x < radius || x > width-radius) {
      speedX = -speedX;
    }
    if (y < radius || y > height-radius) {
      speedY = -speedY;
    }
    if (mousePressed && !pmousePressed
      && isPointInsideCircle(mouseX, mouseY, x, y, radius*2)) {
      clicks++;
    }
  }

  void draw() {
    // Draw the circle
    fill(200, 200, 255);
    ellipse(x, y, radius*2, radius*2);
    fill(0);
    text(clicks+"!", x, y);
  }
}

