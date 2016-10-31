// Color-by-Number Picture by Steve Ogden
//http://steveogden.com/blog/2013/halloween-sketch/

PImage[] images;
int[] colors = new int[9];
  
// int c = color(255, 0, 0); // How to store a color in a variable
// c = #FF0000;

void setup() {
  size(1000, 817);
  images = new PImage[8];
  images[0] = loadImage("Base.png");
  images[1] = loadImage("Pumpkin.png");
  images[2] = loadImage("Stem.png");
  images[3] = loadImage("Grass.png");
  images[4] = loadImage("Moon.png");
  images[5] = loadImage("Crow.png");
  images[6] = loadImage("Beak.png");
  images[7] = loadImage("Cat.png");
  
  colors[0] = color(11, 60, 115);
  colors[5] = color(255, 10, 10);
}

void draw() {
  background(colors[0]);
  for (int i=0; i<images.length; i++) { // i = i+1, i += 1, i++
    tint(colors[i + 1]);
    image(images[i], 0, 0);
  }
}