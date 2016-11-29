Projectile[] darts = new Projectile[0]; // start with no projectiles
class Projectile {
  float x, y, speedX, speedY;
}
Projectile makeProjectile() {
  Projectile nj = new Projectile(); // nj = newProjectile
  nj.x = width/2; // the center
  nj.y = height/2;
  int speed = 30; // this fast...
  nj.speedX = speed * cos(angle); //... in the direction of the line
  nj.speedY = speed * sin(angle);
  return nj;
}

void setup() {
  size(800, 600);
  strokeWeight(5);
}

float angle = 0;
void draw() {
  background(200);
  
  pushMatrix();
  translate(width/2, height/2);
  rotate(angle);
  line(0, 0, 50, 0);
  popMatrix();
  
  // draws all of the darts
  for (int i=0; i<darts.length; i++) {
    ellipse(darts[i].x, darts[i].y, 10, 10);
    
    darts[i].x += darts[i].speedX; // Dart physics
    darts[i].y += darts[i].speedY;    
    
    darts[i].speedX *= .9; // Dart friction
    darts[i].speedY *= .9;
  }
  
  angle += .02; // rotate the line
}

void keyPressed() {
  // adds one new projectile to the array
  darts =(Projectile[]) append(darts, makeProjectile());
}