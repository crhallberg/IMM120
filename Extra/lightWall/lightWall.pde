// sequence of letters, 0=A, 1=B, etc.
int[] sequence = {7, 0, 15, 15, 24, 7, 0, 11, 11, 14, 22, 4, 4, 13};
int[] lightXs;  // positions for lights
int[] lightYs;  //
int[] lightColors; // light colors

PImage letterWall;
boolean on = false;
int current = sequence.length; // start at end to pause before starting, see line 23

void setup() {
  size(1080, 684);
  letterWall = loadImage("letterwall.png");
  setupLightValues(); // populate arrays with light numbers
}

void draw() {
  noStroke();
  if (frameCount % 40 == 0) { // Every second or so
    on = !on; // toggle (if off, turn on; vice versa) the lights
    if (on) { // if the light is on
      current += 1; // advance to next letter
      if (current == sequence.length + 3) { // go for three extra to add a pause between phrases
        current = 0;
      }
    }
  }
  if (on && current < sequence.length) {
    int letter = sequence[current];
    for (int size=5; size<75; size+=5) { // draw semi-transparent circles to create a glow effect
      fill(lightColors[letter], 15); // lookup light color
      ellipse(lightXs[letter], lightYs[letter], size, size); // place light in right position
    }
    // one bright circle for the bulb
    fill(lightColors[letter]);
    ellipse(lightXs[letter], lightYs[letter], 10, 10);
  }
  tint(255, 255, 255, 60); // makes the picture semi-transparent, allowing for a fade effect
  image(letterWall, 0, 0);
  // println(mouseX, mouseY); // how I found the light positions
}

// Make arrays inline then copy to our named arrays
void setupLightValues() {
  int[] xs = {310, 359, 398, 477, 521, 611, 640, 729, 243, 319, 365, 421, 479, 535, 597, 658, 798, 282, 332, 373, 437, 499, 555, 611, 681, 783};
  int[] ys = {133, 124, 124, 121, 115, 120, 114, 89, 216, 230, 233, 232, 229, 206, 189, 184, 183, 313, 323, 335, 329, 326, 318, 312, 299, 296};
  int[] colors = {#ffffff, #002288, #aa3399, #00ffff, #0066ff, #ffffee, #ffcc44, #00dddd, #00eeff, #aa5599, #2266ff, #44ffff, #ffcc88, #ff5599, #663399, #aaffff, #cc3399, #ddeeff, #ffffdd, #ffcc55, #2222dd, #aa6699, #0099cc, #ffaa44, #aa55cc, #ff3355};
  lightXs = xs;
  lightYs = ys;
  lightColors = colors;
}