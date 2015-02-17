void setup()
{
  size(800, 600);
}

void draw()
{
  background(100);
  
  int row = 0;
  while(row < 9) { // 9 rows
    for(int x=10 ; x<width-40 ; x=x+40+6) {
      fill(255);
      if(x > 400) {
        fill(255, 255, 0);
      }
      if(row == 2 && x == 10+46*5) {
        fill(0, 0, 255);
      }
      int y = row*(60+6) + 5;
      // draw a window
      rect(x, y, 40, 60);
      line(x, y+30, x+40, y+30);
    }
    row = row + 1; // Don't forget to add! No infinite loops!
  }
}
