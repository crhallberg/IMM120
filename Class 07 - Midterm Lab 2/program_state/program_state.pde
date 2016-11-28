boolean winner = false;

int size;

void setup() {
  size(600, 600);
  gameSetup();
}

void draw() {
  if (winner) {
    winScreen();
  } else {
    gameDraw();
  }
}

void winScreen() {
  background(0);
  fill(255);
  textSize(48);
  text("YOU WIN!", 300, 300);
  if (keyPressed) {
    gameSetup();
  }
}

void gameSetup() {
  noStroke();
  // score = 0;
  // timer = 0;
  // music.play();
  winner = false;
  size = 10;
}

void gameDraw() {
  background(255);
  pushMatrix();
  translate(width/2, height/2);
  rotate(frameCount/200.0);
  fill(255, 0, 100);
  for(int i=0; i<8; i+=1) {
    ellipse(150, 0, 200, 200);
    rotate(PI/4);
  }
  fill(255, 255, 0);
  if (mousePressed && dist(mouseX, mouseY, width/2, height/2) < 60) {
    fill(0, 255, 0);
    winner = true;
  }
  ellipse(0, 0, size, size);
  size ++;
  popMatrix();
}