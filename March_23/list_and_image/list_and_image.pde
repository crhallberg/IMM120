int[] balls; // DEFINE
int ballSize = 15;

PImage apple;

void setup()
{
  apple = loadImage("apple.jpg");
  
  size(800, 800);
  balls = new int[width/ballSize]; // DECLARE NUMBER
  
  for(int i=0;i<balls.length;i=i+1) {
    balls[i] = i; // SET IN LOOP
  }
  
  println(balls);
}

void draw()
{
  background(0);
  image(apple, 0, 0);
  for(int i=0;i<balls.length;i=i+1) {
    ellipse(i*ballSize, balls[i], ballSize, ballSize);
    balls[i] = balls[i] + i;
    if(balls[i] > height) {
      balls[i] = balls[i]-height;
    }
  }
}
