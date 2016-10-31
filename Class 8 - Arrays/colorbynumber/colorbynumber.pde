// Color-by-Number Picture by Steve Ogden
//http://steveogden.com/blog/2013/halloween-sketch/

PImage[] images;

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
}

void draw() {
  background(colors[0]);
  for (int i=0; i<images.length; i++) {
    tint(colors[i]);
    image(images[i], 0, 0);
  }
}