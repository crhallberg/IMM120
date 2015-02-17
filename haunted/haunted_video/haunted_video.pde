import processing.video.*;
import ddf.minim.*;

// Camera work
int numPixels;
int[] backgroundPixels;
Capture video;

// Variables for Visuals
int cloudCount = 400;
Cloud[] sky = new Cloud[cloudCount];
int lightning = 40;
Lightning bolt;

// Variables for Sound
int thunderCount = 0;
boolean playThunder = false;

Minim minim;
AudioPlayer thunderStrike;
AudioSample thunder;
float rainQuiet = .1;
float rainLoud = .6;

void setup() {
  size(640, 480);
  video = new Capture(this, width, height);  
  // Start capturing the images from the camera
  video.start();    
  numPixels = video.width * video.height;
  // Create array to store the background image
  backgroundPixels = new int[numPixels];
  video.loadPixels();
  arraycopy(video.pixels, backgroundPixels);

  minim = new Minim(this);
  // Load a sample that can be played many times in layers
  thunder = minim.loadSample("thunder.mp3", 512);
  // Just a sound to be looped or played once
  thunderStrike = minim.loadFile("thunder_strike.mp3");
  thunderStrike.play();

  // Make clouds and lightning
  bolt = new Lightning();
  for (int i=0; i<cloudCount; i++) {
    sky[i] = new Cloud(i);
  }
}

// Run forever after setup
void draw() {
  if (playThunder && thunderCount < 0) {
    thunder.trigger();
    playThunder = false;
  }
  thunderCount--;

  // Visuals
  if (lightning > 0 && random(10) < 2) {
    background(255);
  } else {
    background(0);
  }
  bolt.draw();
  for (int i=0; i<sky.length; i++) {
    sky[i].draw();
  }
  lightning--;

  addVideoBits();
}

// Flash and play delayed thunder on key pressed
void keyPressed() {
  if(keyCode == UP) {
    backgroundThreshold += 10;
  } else if(keyCode == DOWN) {
    backgroundThreshold -= 10;
  } else {
  lightning = 10;
  bolt = new Lightning();
  thunderCount = ceil(random(0, 60));
  playThunder = true;
  }
  println(backgroundThreshold);
}

void mouseClicked() {
  video.loadPixels();
  arraycopy(video.pixels, backgroundPixels);
}

void addVideoBits() {
  if (video.available()) {
    video.read(); // Read a new video frame
    video.loadPixels(); // Make the pixels of video available
  }
  // Make the pixels[] array available for direct manipulation
  loadPixels();
  // Difference between the current frame and the stored background
  for (int i = 0; i < numPixels; i++) { // For each pixel in the video frame...
    if (!partOfBackground(video.pixels[i], i)) {
      pixels[i] = video.pixels[i];
    }
  }
  updatePixels(); // Notify that the pixels[] array has changed
}

int backgroundThreshold = 100;
boolean partOfBackground(color currColor, int i) {
  // Fetch the color of the background in that spot
  color bkgdColor = backgroundPixels[i];
  // Extract the red, green, and blue components of the current pixel's color
  int currR = (currColor >> 16) & 0xFF;
  int currG = (currColor >> 8) & 0xFF;
  int currB = currColor & 0xFF;
  // Extract the red, green, and blue components of the background pixel's color
  int bkgdR = (bkgdColor >> 16) & 0xFF;
  int bkgdG = (bkgdColor >> 8) & 0xFF;
  int bkgdB = bkgdColor & 0xFF;
  // Compute the difference of the red, green, and blue values
  return abs(currR - bkgdR)+abs(currG - bkgdG)+abs(currB - bkgdB) < backgroundThreshold;
}

