Projectile[] darts = new Projectile[0];
class Projectile {
  float x, y, speedX, speedY;
  boolean fall = false;
}
void addDart(float angle, int speed) {
  Projectile nj = new Projectile();
  nj.x = width/2;
  nj.y = height/2;
  angle -= PI/2;
  nj.speedX = speed * cos(angle);
  nj.speedY = speed * sin(angle);
  darts =(Projectile[]) append(darts, nj);
}

float TICK = TWO_PI/60;
float HOURTICK = TWO_PI/12;
int secondSpeed = 30;
int minuteSpeed = 25;
int hourSpeed = 20;
int prevSecond = second();
void setup() {
  size(800, 600);
  strokeWeight(5);
  frameRate(60);
  for (int i=0; i<60; i++) {
    if (i <= second()) {
      addDart(i*TICK, secondSpeed);
    }
    if (i <= minute()) {
      addDart(i*TICK, minuteSpeed);
    }
    if (i <= hour()%12) {
      addDart(i*HOURTICK, hourSpeed);
    }
  }
}

void draw() {
  background(200);

  pushMatrix();
  translate(width/2, height/2);
  rotate(second()*TICK-PI/2);
  line(0, 0, 50, 0);
  popMatrix();

  pushMatrix();
  translate(width/2, height/2);
  rotate(minute()*TICK-PI/2);
  line(0, 0, 40, 0);
  popMatrix();

  pushMatrix();
  translate(width/2, height/2);
  rotate(hour()*HOURTICK-PI/2);
  line(0, 0, 30, 0);
  popMatrix();

  for (int i=0; i<darts.length; i++) {
    ellipse(darts[i].x, darts[i].y, 10, 10);

    darts[i].x += darts[i].speedX;
    darts[i].y += darts[i].speedY;    

    if (darts[i].fall) {
      darts[i].speedY += .5;
    } else {
      darts[i].speedX *= .89;
      darts[i].speedY *= .89;
    }
  }


  if (prevSecond != second()) {
    if (second() == 1) {
      if (darts.length >= 120) {
        darts =(Projectile[]) subset(darts, 60);
      }
      for (int i=0; i<darts.length; i++) {
        darts[i].fall = true;
      }
    }
    addDart(second()*TICK, secondSpeed);
    prevSecond = second();
  }
}