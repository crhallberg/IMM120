// Sketch > Import Library... > Sound
import processing.sound.*;

SoundFile music;
SoundFile ding;

void setup() {
  size(200, 200);
  music = new SoundFile(this, "intermission.mp3");
  ding = new SoundFile(this, "ding.mp3");
  music.loop();
  
  textAlign(CENTER);
  textSize(48);
}

void draw() {
  background(100);
  text(rate, width/2, height/2);
}

float rate = 1.0;
void keyPressed() {
  rate -= 0.1;
  music.rate(rate);
}