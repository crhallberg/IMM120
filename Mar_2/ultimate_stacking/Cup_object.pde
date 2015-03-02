class Cup implements Comparable
{
  int id = 0;
  int column = 2;
  int y = 0;
  boolean inverted = true;
  boolean up = false;
  Cup(int id) {
    this.id = id;
    this.y = stackToY(id);
  }

  void draw() {
    pushMatrix();
    if (this.up) {
      translate(hand * COLUMN_WIDTH, 20);
    } else {
      translate(this.column * COLUMN_WIDTH, this.y);
    }
    if (this.inverted) {
      rotate(PI);
    }
    stroke(0);
    fill(200);
    beginShape();
    vertex(-COLUMN_WIDTH, -CUP_HEIGHT/2);
    vertex(COLUMN_WIDTH, -CUP_HEIGHT/2);
    vertex(HALF_COLUMN+3, CUP_HEIGHT/2);
    vertex(-HALF_COLUMN-3, CUP_HEIGHT/2);
    endShape(CLOSE);
    popMatrix();
  }

  int compareTo(Object o) {
    Cup e = (Cup)o;
    return e.y-this.y;
  }
}

