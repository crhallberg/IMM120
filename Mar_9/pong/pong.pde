int ballX, ballY;
int ballSpeedX, ballSpeedY;
int speed = 5;

int bar1, bar2; // Vertical position of the bars
int barHeight = 100;

void setup()
{
  size(800, 600);
  ballX = width/2;
  ballY = height/2;
  ballSpeedX = speed;
  ballSpeedY = speed;

  bar1 = height/2;
  bar2 = height/2;
}

void draw()
{
  background(0);
  fill(255);
  ellipse(ballX, ballY, 30, 30);

  ballX = ballSpeedX + ballX;
  ballY = ballSpeedY + ballY;

  if (ballY < 0) { // TOP
    ballSpeedY = -ballSpeedY;
  }
  if (ballY > height) { // BOTTOM
    ballSpeedY = -ballSpeedY;
  }
  if(isInsideRect(ballX, ballY, 50, bar1, 20, barHeight)) {
    ballSpeedX = -ballSpeedX;
  }
  if(isInsideRect(ballX, ballY, width-70, bar2, 20, barHeight)) {
    ballSpeedX = -ballSpeedX;
  }
  
  // GOOOOOOOOAL!
  if (ballX < 0) { // LEFT
    ballSpeedX = -ballSpeedX;
  }
  if (ballX > width) { // RIGHT
    ballSpeedX = -ballSpeedX;
  }

  strokeWeight(10);
  stroke(255);
  line(50, bar1, 50, bar1+barHeight);
  bar2 = mouseY;
  line(width-50, bar2, width-50, bar2+barHeight);
}

void keyPressed() 
{
  if (keyCode == UP) {
    bar1 = bar1 - 30;
  }
  if (keyCode == DOWN) {
    bar1 = bar1 + 30;
  }
}

boolean isInsideRect(float x, float y, float rectX, float rectY, float rectW, float rectH)
{
  boolean answer = x > rectX && y > rectY && x < rectX+rectW && y < rectY+rectH;
  return answer;
}

