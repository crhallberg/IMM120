class Snow
{
  float x, y, angle, speed;
  Snow(float x, float s) {
    this.x = x;
    this.y = random(-height-10, -10); // Start randomly above screen
    this.speed = s;
  }

  void draw() {
    // FALL AND SPIN
    this.angle = this.angle + this.speed;
    this.y = this.y + this.speed;
    if (this.y > height) {
      this.y = -10;
    }
    
    // DRAW

    pushMatrix();

    translate(this.x, this.y);
    rotate(radians(this.angle));

    line(-10, 0, 10, 0);
    line(-5, -8, 5, 8);
    line(-5, 8, 5, -8);

    popMatrix();
  }
}

