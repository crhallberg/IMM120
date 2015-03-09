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
    // Check the ball collision
    if (this.isInside( pong.x, pong.y )) {
      pong.speedX = -pong.speedX;
    }
    if (this.isInside( pong2.x, pong2.y )) {
      pong2.speedX = -pong2.speedX;
    } 

    stroke(255);
    // Collision rect
    strokeWeight(1);
    noFill();
    rect(this.x, this.y, this.w, this.h);
    // Paddle
    strokeWeight(10);
    line(this.x, this.y, this.x, this.y+this.h);
  }

  boolean isInside(float X, float Y)
  {
    boolean answer = X > this.x && Y > this.y && X < this.x+this.w && Y < this.y+this.h;
    return answer;
  }
}

