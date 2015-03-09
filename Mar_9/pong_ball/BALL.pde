class Ball
{
  int x, y;
  int speedX, speedY;
  int speed = 5;
  color f;

  Ball(int newx, int newy, color c)
  {
    this.x = newx;
    this.y = newy;
    this.speedX = this.speed;
    this.speedY = this.speed;
    this.f = c;
  }

  void draw()
  {
    fill(this.f);
    noStroke();
    ellipse(this.x, this.y, 30, 30);

    this.x = this.speedX + this.x;
    this.y = this.speedY + this.y;

    if (this.x < 0) { // LEFT
      this.speedX = -this.speedX;
    }
    if (this.y < 0) { // TOP
      this.speedY = -this.speedY;
    }
    if (this.x > width) { // RIGHT
      this.speedX = -this.speedX;
    }
    if (this.y > height) { // BOTTOM
      this.speedY = -this.speedY;
    }
  }
}
