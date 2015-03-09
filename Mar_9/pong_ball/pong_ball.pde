Ball pong, pong2, pong3, pong4;
Paddle bar1, bar2;

void setup()
{
  size(800, 600);
  pong = new Ball(400, 300, color(255, 0, 0));
  pong2 = new Ball(300, 150, color(255, 255, 255));
  pong3 = new Ball(100, 100, color(0, 100, 255));
  pong4 = new Ball(200, 500, color(255, 100, 0));
  
  bar1 = new Paddle(50, height/2, 20, 140);
  bar2 = new Paddle(width-50, height/2, 20, 80);
}

void draw()
{
  background(0);
  pong.draw();
  pong2.draw();
  pong3.draw();
  pong4.draw();
  
  bar1.draw();
  
  bar2.y = mouseY;
  bar2.draw();
}

void keyPressed() {
  if (keyCode == UP) {
    bar1.y = bar1.y - 30;
  }
  if (keyCode == DOWN) {
    bar1.y = bar1.y + 30;
  }
}


