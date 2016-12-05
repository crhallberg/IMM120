Rect[] box;
Mover[] drop; // PVector holds x,y,z

void setup() {
  size(800, 600);
  int w = 200;
  box = new Rect[6];
  for (int i=0; i<box.length; i++) {
    box[i] = makeRect(random(0, width-w), random(100, height-150), w, 50);
  }
  drop = new Mover[20];
  for (int i=0; i<drop.length; i++) {
    drop[i] = new Mover();
    drop[i].x = i*30+100;
    drop[i].y = 0;
    drop[i].speedY = 3;
  }
}

void draw() { 
  for (int i=0; i<box.length; i++) {
  for (int d=0; d<drop.length; d++) {
    if (pointRect(drop[d].x, drop[d].y, box[i].x, box[i].y, box[i].width, box[i].height)) {
      drop[d].y = box[i].y;
    }
  }
  }

  for (int i=0; i<box.length; i++) {
    drawRect(box[i]);
  }
  for (int i=0; i<drop.length; i++) {
    ellipse(drop[i].x, drop[i].y, 10, 10);
    updateMover(drop[i]);
  }
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