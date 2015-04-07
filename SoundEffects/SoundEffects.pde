import ddf.minim.*;

Minim minim;
AudioPlayer song;
AudioSample laser;

void setup()
{
  size(512, 200);
  
  minim = new Minim(this);
  laser = minim.loadSample("laser.mp3");
  
  // song = minim.loadFile("song.mp3");
  // song.loop();
}

void draw()
{
}

void mousePressed() 
{
  laser.trigger();
}

