PImage st, kb, mi, self;

void setup() {
  size(800, 600);
  st = loadImage("spooky.jpg");
  kb = loadImage("guy.jpg");
  mi = loadImage("concert.jpg");
  self = loadImage("self.png"); // missing
  noStroke(); // lines everywhere
}

void draw() {
  sky();
  wall(); // wrong order
  tv();
  chair(); // missing
}

int cloudX = 200;
void sky() {
  background(0, 20, 60);
  fill(255, 255, 222);
  ellipse(width-100, 140, 200, 200);
  cloud();
}

void cloud() {
  fill(0, 0, 0, 150);
  pushMatrix(); // these translations were ruining everything
  translate(cloudX, 200);
  ellipse(0, 0, 100, 100);
  ellipse(40, 10, 80, 80);
  ellipse(-40, 10, 80, 80);
  ellipse(-80, 30, 40, 40);
  popMatrix();
  cloudX += 1; // slow it down
  if (cloudX > width + 100) { // cloud loops
    cloudX = -50;
  }
}

void wall() {
  fill(150, 70, 0);
  rect(0, 0, width, 150);
  rect(0, height - 200, width, 200);
  rect(0, 0, 50, height);
  rect(width - 50, 0, 50, height);
  rect(width/2 - 25, 0, 50, height);
}

int imageNumber = 0;
int screenX = 410;
int screenY = 310; // not lined up
int screenWidth = 220;
int screenHeight = 160;
void tv() {
  fill(20);
  rect(400, 300, 240, 180);
  rect(420, 480, 10, 20);
  rect(610, 480, 10, 20);
  // TV screen
  if (imageNumber == 0) {
    image(st, screenX, screenY, screenWidth, screenHeight);
  } else if (imageNumber == 1) {
    image(kb, screenX, screenY, screenWidth, screenHeight);
  } else if (imageNumber == 2) {
    image(mi, screenX, screenY, screenWidth, screenHeight);
  } else if (imageNumber == 3) {
    image(self, screenX, screenY, screenWidth, screenHeight);
  } else {
    imageNumber = 0;
  }
  tvPattern();
}

float patternY = 0;
void tvPattern() {
  fill(255, 255, 255, 20);
  rect(screenX, screenY, screenWidth, patternY);
  float topBar = screenY + patternY + 4;
  for(float y=topBar; y < screenY+screenHeight; y+=12) {
    rect(screenX, y, screenWidth, min(8, screenY+screenHeight-y));
  }
  patternY += 0.1;
  if (patternY > 12) {
    patternY = 0;
  }
}

void chair() {
  // head
  fill(50, 20, 0);
  ellipse(325, height, 200, 200);
  // chair
  fill(100, 10, 20);
  rect(100, 550, 450, 100);
}

void mousePressed() {
  imageNumber += 1;
}