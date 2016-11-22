Particle[] sparks = new Particle[0]; // start with an empty array: no sparks

class Particle {
  float x;
  float y;
  float speedX;
  float speedY;
  int shade;
  int life; // start high, when 0, delete
}

Particle makeParticle(float x, float y, int c) { // c for color
  Particle np = new Particle(); // make an "empty" particle, np for new particle
  np.x = x;
  np.y = y;
  np.shade = c;
  np.life = round(random(50, 100));
  // random speedX and speedY gives us square bursts  :(
  // random direction and speed gives us round bursts :)
  float direction = random(0, TWO_PI); // pick random directions
  float speed = random(0, 10); // faster speed = larger boom
  np.speedX = speed * cos(direction);
  np.speedY = speed * sin(direction);

  return np;
}

void setup() {
  size(800, 800);
  noStroke();
}

void draw() {
  background(0);
  for (int i=0; i<sparks.length; i++) { 
    drawSpark(sparks[i]);
  }
  // separate delete check so we don't delete while looping (causes skipping)
  // check is backward to avoid problems with looping thru a shrinking array
  for (int i=sparks.length-1; i>=0; i--) { 
    sparks[i].life -= 1;
    if (sparks[i].life == 0) {
      deleteSpark(i);
    }
  }
}

void drawSpark(Particle current) {
  current.speedX *= .96; // friction
  current.speedY *= .96; // friction

  current.x += current.speedX;
  current.y += current.speedY;

  fill(current.shade, 200); // a little transparent
  ellipse(current.x, current.y, 10, 10);
}

void deleteSpark(int index) {
  // Copy everything to the right of our doomed item left
  for (int i=index+1; i<sparks.length; i++) {
    sparks[i-1] = sparks[i];
  }
  // Remove last element
  sparks =(Particle[]) shorten(sparks);
}

void mousePressed() {
  int newColor = color(random(100, 255), random(100, 255), random(100, 255)); 
  for (int i=0; i<1000; i++) { // change number 1000 to affect how many particles appear
    sparks =(Particle[]) append(sparks, makeParticle(mouseX, mouseY, newColor));
  }
}