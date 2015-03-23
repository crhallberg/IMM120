int[] balls; // DEFINE
int ballSize = 10;

void setup()
{
  size(800, 800);
  balls = new int[70]; // DECLARE NUMBER
  
  for(int i=0;i<balls.length;i=i+1) {
    balls[i] = i; // SET IN LOOP
  }
  
  println(balls);
}

void draw()
{
  background(0);
  for(int i=0;i<balls.length;i=i+1) {
    ellipse(i*ballSize, balls[i], ballSize, ballSize);
    balls[i] = balls[i] + 5;
    if(balls[i] > height) {
      balls[i] = 0;
    }
  }
}
