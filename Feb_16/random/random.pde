int countOnes = 0;
int countTens = 0;
int countHundreds = 0;

void setup()
{
  size(800, 600);
}

void draw()
{
  background(100);

  int i = 0;
  while (i < 100000) {
    float number = random(0, 150);
    if (number <= 9) {
      countOnes = countOnes + 1;
    }
    if (number <= 99 && number > 9) {
      countTens = countTens + 1;
    }
    if (number <= 999 && number > 99) {
      countHundreds = countHundreds + 1;
    }
    i = i + 1;
  }

  textSize(50);
  text("Ones: "+countOnes, 10, 200);
  text("Tens: "+countTens, 10, 300);
  text("100s: "+countHundreds, 10, 400);
}

