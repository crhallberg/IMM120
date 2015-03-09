Ball pong, pong2;
Paddle bar1, bar2;

void setup()
{
  size(800, 600);
  pong = new Ball(400, 300, color(255, 0, 0));
  pong2 = new Ball(100, 100, color(255, 255, 255));
  
  bar1 = new Paddle(50, height/2, 20, 100);
}

void draw()
{
  background(0);
  pong.draw();
  pong2.draw();
  
  bar1.draw();
}

void keyPressed() 
{
  if (keyCode == UP) {
    bar1.y = bar1.y - 30;
  }
  if (keyCode == DOWN) {
    bar1.y = bar1.y + 30;
  }
}


