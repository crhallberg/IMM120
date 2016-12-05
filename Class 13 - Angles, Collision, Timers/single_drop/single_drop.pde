Rect box;
PVector drop; // PVector holds x,y,z

void setup() {
  size(800, 600);
  int w = 400;
  box = makeRect(random(100, width-w-100), random(100, height-150), w, 50);
  drop = new PVector(random(100, width-100), 0);
}

void draw() {
  drawRect(box);
  
  ellipse(drop.x, drop.y, 10, 10);
  drop.y += 3;
}

class Rect {
  float x, y, width, height;
}
Rect makeRect(float x, float y, float w, float h) {
  Rect baby = new Rect();
  baby.x = x;
  baby.y = y;
  baby.width = w;
  baby.height = h;
  return baby;
}
void drawRect(Rect op) {
  rect(op.x, op.y, op.width, op.height);
}