int numberOfCups = 20;

/* left(), right(), pickup(), flip(), drop() */

void makeAPrettyStack()
{

  /* -- YOUR CODE HERE -- */
  for(int i=0;i<8;i++) {
    
    moveCup(5, flip);
  }
  
  moveCup(5, true);
  moveCup(7, false);
}

/* -- Make your own functions if you'd like! -- */

void moveCup(int spaces, boolean x)
{
  pickup();
  for (int i=0; i<spaces; i++) {
    right();
  }
  if (x) {
    flip();
  }
  drop();
  int j=0;
  while (j < spaces) {
    left();
    j = j+1;
  }
}

