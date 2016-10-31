int ball1 = 100;
int ball1speed = 5;

int ball2 = 100;
int ball2speed = 5;

int ball3 = 100;
int ball3speed = 5;

int ball4 = 100;
int ball4speed = 5;

int ball5 = 100;
int ball5speed = 5;

int ball6 = 100;
int ball6speed = 5;

int ball7 = 100;
int ball7speed = 5;

void setup() {
  size(320, 400);
}

void draw() {
  background(0);
  
  ellipse(40, ball1, 20, 20);
  ball1 += ball1speed;
  if (ball1 < 0 || ball1 > height) {
    ball1speed *= -1;
  }
  
  ellipse(80, ball2, 20, 20);
  ball2 += ball2speed;
  if (ball2 < 0 || ball2 > height) {
    ball2speed *= -1;
  }
  
  ellipse(120, ball3, 20, 20);
  ball3 += ball3speed;
  if (ball3 < 0 || ball3 > height) {
    ball3speed *= -1;
  }
  
  ellipse(160, ball4, 20, 20);
  ball4 += ball4speed;
  if (ball4 < 0 || ball4 > height) {
    ball4speed *= -1;
  }
  
  ellipse(200, ball5, 20, 20);
  ball5 += ball5speed;
  if (ball5 < 0 || ball5 > height) {
    ball5speed *= -1;
  }
  
  ellipse(240, ball6, 20, 20);
  ball6 += ball6speed;
  if (ball6 < 0 || ball6 > height) {
    ball6speed *= -1;
  }
  
  ellipse(280, ball7, 20, 20);
  ball7 += ball7speed;
  if (ball7 < 0 || ball7 > height) {
    ball7speed *= -1;
  }
}