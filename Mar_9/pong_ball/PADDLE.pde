class Paddle
{
  int x, y, w, h;
  
  Paddle(int newx, int newy, int neww, int newh)
  {
    this.x = newx;
    this.y = newy;
    this.w = neww;
    this.h = newh;
  }
  
  void draw()
  {
    stroke(255);
    strokeWeight(10);
    line(this.x, this.y, this.x, this.y+this.h);
  }
}
