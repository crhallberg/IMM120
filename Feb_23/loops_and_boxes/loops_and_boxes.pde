// Loops and Boxes
// More thorough explanation of loops, rolling and unrolling loops
void setup()
{
  size(800, 600);
}

void draw()
{
  int row = 0;
  while(row < 4) {
    
    for(int card=1 ; card<=13 ; card=card+1) {
      println(row+" "+card);
    }
    
    row = row + 1;
  }
}
