// Loops and Boxes
// More thorough explanation of loops, rolling and unrolling loops
void setup()
{
  size(800, 600);
}

void draw()
{
  int row = 0;
  int rwidth = 40;
  int rpadding = 6;
  int offset = 5;
  while (row < 4) {
    int y = row * (80 + 6) + 8;

    for (int card=1; card<=13; card=card+1) {
      int x = card * (rwidth + rpadding) + offset;
      fill(255);
      rect(x, y, rwidth, 80);
      fill(0);
      //text(card+"", x+3, y+20); 
      if (card == 1) { // Odd
        ellipse(x+rwidth/2, y+70, 10, 10);
      } else {
        
        if (card == 3) {
          rect(x+rwidth-12, y+20, 10, 10);
        } else {
          text(card, x+2, y+20);
        }
        
      }
    }

    row = row + 1;
  }
}

