Particle[] snow;

void setup()
{
  size(800, 400);
  snow = new Particle[100];
  for (int i=0; i<snow.length; i++) {
    snow[i] = new Particle(i*width/snow.length, floor(random(-height, -10)));
  }
}

void draw()
{
  background(0); 
  for (int i=0; i<snow.length; i++) {
    snow[i].draw();
  }
}

class Particle
{
  int x, y;
  color c = color(random(100, 255), random(100, 255), random(100, 255));
  Particle(int x, int y) {
    this.x = x;
    this.y = y;
  }
  void draw() {
    pushMatrix();
    translate(this.x, this.y);
    rotate(y/100f);
    fill(this.c);
    rect(-10, -10, 20, 20);
    popMatrix();
    y = y + round(random(2, 6));
    if (y > height) {
      y = -10;
    }
  }
}

