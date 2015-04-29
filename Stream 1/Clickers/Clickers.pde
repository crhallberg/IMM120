int speed = 3;
int radius = 100;
Clicker[] clickers;
boolean pmousePressed = false;

void setup() {
  size(1000, 800);

  clickers = new Clicker[20]; // how many
  for(int i=0; i<clickers.length; i++) {
    clickers[i] = new Clicker(width/2, height/2); 
  }

  textSize(48);
  textAlign(CENTER, CENTER);
}

void draw() {
  background(100, 50, 50);
  
  for(Clicker c : clickers) {
    c.move(); 
    c.draw(); 
  }

  // Mouse clicked magic
  pmousePressed = mousePressed;
}

boolean isPointInsideCircle(
/* point  */float pointX, float pointY, 
/* circle */float circleX, float circleY, float size
) {
  boolean answer = dist(circleX, circleY, pointX, pointY) < size/2;
  return answer;
}

