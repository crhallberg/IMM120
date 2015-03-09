class Ball
{
  int this.x, this.y;
  int this.speedX, this.speedY;
  int this.speed = 5;

  Ball(int newx, int newy)
  {
    this.x = newx;
    this.y = newy;
    this.speedX = speed;
    this.speedY = speed;
  }

  void draw()
  {
    fill(255);
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

