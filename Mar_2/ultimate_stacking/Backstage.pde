import java.util.Arrays;

int COLUMNS = 40;
int COLUMN_WIDTH = 30;
int HALF_COLUMN = COLUMN_WIDTH/2;
int CUP_GAP = floor(COLUMN_WIDTH * 2/3);
int CUP_HEIGHT = COLUMN_WIDTH*2;
Cup[] cups;
int selected = -1;
int hand = 2;

void setup()
{
  size(COLUMN_WIDTH*(COLUMNS+1), 700);

  cups = new Cup[numberOfCups];
  for (int i=0; i<cups.length; i++) {
    cups[i] = new Cup(i);
  }

  makeAPrettyStack();
}

void draw() {
  background(150);
  // Column of light
  noStroke();  
  fill(255, 255, 0, 100);
  rect(hand*COLUMN_WIDTH-20, 0, 40, height);
  // Table
  fill(100, 200, 50);
  rect(-5, height-16, width+10, 30);
  // Circle

  for (int i=0; i<cups.length; i++) {
    cups[i].draw();
  }
}

void keyPressed()
{
  if (keyCode == LEFT) {
    left();
  }
  if (keyCode == RIGHT) {
    right();
  }
  if (keyCode == UP) {
    flip();
  }
  if (key == ' ') {
    if (selected < 0) {
      pickup();
    } else {
      drop();
    }
  }
}

int topOfStack(int stack)
{
  int max = height*2;
  int top = -1;
  for (int i=0; i<cups.length; i++) {
    if (!cups[i].up && hand == cups[i].column && cups[i].y < max) {
      max = cups[i].y;
      top = i;
    }
  }
  return top;
}

int dropTop(int stack, boolean inverted)
{
  int max = height*2;
  for (int i=0; i<cups.length; i++) {
    boolean mixedFlip = (inverted && !cups[i].inverted) || (!inverted && cups[i].inverted);
    if (!cups[i].up
      && ((!mixedFlip && hand == cups[i].column && cups[i].y-HALF_COLUMN < max)
      || (mixedFlip && hand == cups[i].column && cups[i].y-COLUMN_WIDTH*2 < max)
      || (abs(hand-cups[i].column) == 1 && cups[i].y-COLUMN_WIDTH*2 < max))) {
      if (hand == cups[i].column) {
        max = cups[i].y-CUP_GAP;
        if(mixedFlip) {
          max -= CUP_HEIGHT-CUP_GAP;
        }
      } else {
        max = cups[i].y-CUP_HEIGHT;
      }
    }
  }
  if(max == height*2) {
    return stackToY(0);
  }
  return max;
}

int stackToY(int stack) {
  return height-CUP_HEIGHT/2-stack*CUP_GAP-8;
}
