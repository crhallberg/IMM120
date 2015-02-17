import ddf.minim.*;

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
  size(1024, 768);

  minim = new Minim(this);
  thunder = minim.loadSample("thunder.mp3", 512);
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
}

// Flash and play delayed thunder on key pressed
void keyPressed() {
  lightning = 10;
  bolt = new Lightning();
  thunderCount = ceil(random(0, 60));
  playThunder = true;
}

// Cloud object
class Cloud {
  float x, y, size, layer;
  Cloud(int id) {
    this.layer = id*6/cloudCount;
    this.size = random(80, 150);
    this.x = random(-this.size, width);
    this.y = 100-random(0, this.size);
  }
  void draw() {
    noStroke();
    if (this.layer < 4 && lightning > 0 && random(10) > 5) {
      fill(255);
    } else {
      fill(10*this.layer, 200);
    }
    ellipse(this.x, this.y - 20*this.layer, this.size, this.size);
    this.x += this.layer;
    if (this.x > width+this.size) {
      this.x = -this.size;
    }
  }
}

// Lightning object
class Lightning {
  PVector[] trail;
  int life;

  Lightning() {
    this.life = 60;
    float x = random(100, width-100);
    float y = 0;
    this.trail = new PVector[1];
    this.trail[0] = new PVector(x, y);    
    while (y < height) {
      x += (noise(x)-.5) * 200;
      y += noise(y)*30 + 50;
      this.trail =(PVector[]) append(this.trail, new PVector(x, y));
    }
  }
  void draw() {
    if (this.life <= 0) {
      return;
    }
    strokeWeight(5);
    stroke(255, this.life*4);
    for (int i=1; i<this.trail.length; i++) {
      line(this.trail[i-1].x, this.trail[i-1].y, this.trail[i].x, this.trail[i].y);
    }
    strokeWeight(1);
    this.life--;
  }
}

