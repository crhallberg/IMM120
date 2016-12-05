Rect[] box;
Mover drop; // PVector holds x,y,z

void setup() {
  size(800, 600);
  int w = 200;
  box = new Rect[6];
  for (int i=0; i<box.length; i++) {
    box[i] = makeRect(random(0, width-w), random(100, height-150), w, 50);
  }
  drop = new Mover();
  drop.x = random(100, width-100);
  drop.y = 0;
  drop.speedY = 3;
}

void draw() { 
  for (int i=0; i<box.length; i++) {
    drawRect(box[i]);

    if (pointRect(drop.x, drop.y, box[i].x, box[i].y, box[i].width, box[i].height)) {
      drop.y = box[i].y;
    }
  }

  ellipse(drop.x, drop.y, 10, 10);
  updateMover(drop);
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

// POINT/RECTANGLE
boolean pointRect(float px, float py, float rx, float ry, float rw, float rh) {

  // is the point inside the rectangle's bounds?
  if (px >= rx &&        // right of the left edge AND
    px <= rx + rw &&   // left of the right edge AND
    py >= ry &&        // below the top AND
    py <= ry + rh) {   // above the bottom
    return true;
  }
  return false;
}