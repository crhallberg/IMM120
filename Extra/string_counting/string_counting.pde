int current = 0;

void setup() {
  size(200, 200);
  for (int i=0; i<9; i++) {
    println("myrecording"+ i +".wav");
  }
  println("---");
}

void mousePressed() {
  println("saving myrecording"+ current +".wav");
  current ++;
}

void draw() {
}