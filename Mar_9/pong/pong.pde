int ballX, ballY;
int ballSpeedX, ballSpeedY;
int speed = 5;

void setup()
{
  size(800, 600);
  ballX = width/2;
  ballY = height/2;
  ballSpeedX = speed;
  ballSpeedY = speed;
}

void draw()
{
  background(0);
  fill(255);
  ellipse(ballX, ballY, 30, 30);
  
  ballX = ballSpeedX + ballX;
  ballY = ballSpeedY + ballY;
  
  if(ballX < 0) { // LEFT
    ballSpeedX = -ballSpeedX;
  }
  if(ballY < 0) { // TOP
    ballSpeedY = -ballSpeedY;
  }
  if(ballX > width) { // RIGHT
    ballSpeedX = -ballSpeedX;
  }
  if(ballY > height) { // BOTTOM
    ballSpeedY = -ballSpeedY;
  }
}
