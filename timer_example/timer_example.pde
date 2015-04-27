Timer timer;
void setup()
{
  size(400, 400);
  timer = new Timer(30);
  timer.start();

  textAlign(CENTER);
  textSize(48);
}
void draw()
{
  background(200);
  
  fill(255);
  if (timer.getTimeLeft() < 10) {
    fill(255, 100, 100);
  }
  text(timer.getTimeLeft(), width/2, height/2);
}
void keyReleased()
{
  if ((key == 'r') || (key == 'R') )
  {
    timer.reset();
    println("reset");
  }
  if ((key == 'p') || (key == 'P') )
  {
    timer.pause();
    println("pause");
  }
  if ((key == 'c') || (key == 'C') )
  {
    timer.start();
    println("continue");
  }
  if (key == ' ')
  {
    timer.toggle();
    println("toggle");
  }
}

