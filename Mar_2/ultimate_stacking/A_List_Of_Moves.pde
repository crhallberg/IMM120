/**
 * left
 * right
 * flip
 * pickup
 * drop
 */

void left() {
  if (hand > 1) {
    hand = hand-1;
  }
}

void right() {
  if (hand < COLUMNS) {
    hand = hand+1;
  }
}

void pickup() {
  int top = topOfStack(hand);
  if (top > -1) {
    selected = top;
    cups[selected].up = true;
  }
}

void flip() {
  if (selected > -1) {
    cups[selected].inverted = !cups[selected].inverted;
  }
}

void drop() {
  if(selected < 0) return;
  cups[selected].y = dropTop(hand, cups[selected].inverted);
  cups[selected].column = hand;
  cups[selected].up = false;     
  selected = -1;
  Arrays.sort(cups);
}

