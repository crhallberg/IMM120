Snow[] snow;
Snowman bob;

void setup()
{
  size(800, 600);
  textAlign(CENTER); // REMOVED
  textSize(60);

  int s = 100; // SET TO 10
  snow = new Snow[s];
  for (int i=0; i<snow.length; i++) {
    snow[i] = new Snow((i+1)*width/(s+1), random(2, 6));
  }
  bob = new Snowman();
}

void draw()
{
  background(100, 200, 255);

  fill(255, 200);
  ellipse(width/2, height * 2, width * 3, height * 2.5); 

  bob.draw(); // MOVED TO TOP

  drawSnow();

  fill(20, 20, 150); // FILL MOVED AFTER
  text("Merry Christmas!", width/2, height-40);
}

void drawSnow() {
  stroke(255);
  strokeWeight(2);
  for (int i=0; i<snow.length; i++) {
    snow[i].draw(); // SET TO SNOW[0]
  }
}

