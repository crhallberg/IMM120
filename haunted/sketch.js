// Variables for Visuals
var sky = [];
var cloudCount = 200;
var lightning = 40;
var thunderCount = 0;
var bolt;

// Variables for Sound
var rain, thunder, thunderStrike;
var strikeLength;
var thunderLength;
var rainQuiet = .1, rainLoud = .6;
var playThunder = false;

// Load sounds
function preload() {
  rain = loadSound('./rain.mp3');
  thunder = loadSound('./thunder.mp3');
  thunderStrike = loadSound('./thunder_strike.mp3');
}

function setup() {
  // Advanced sound stuff
  strikeLength = thunderStrike.duration()-2;
  thunderLength = thunder.duration()-2;
  rain.loop(rainQuiet);
  thunderStrike.play();

  // Make canvas
  var canvas = createCanvas(window.innerWidth, window.innerHeight-5).parent('sketch');

  // Make clouds and lightning
  bolt = new Lightning();
  for(var i=0;i<cloudCount;i++) {
    sky.push(new Cloud(i));
  }
}

// Run forever after setup
function draw() {
  // Sound adjustments
  if(thunder.currentTime() > thunderLength) {
    thunder.stop();
    rain.setVolume(rainLoud);
  }
  if(thunderStrike.currentTime() > strikeLength) {
    thunderStrike.stop();
    rain.setVolume(rainLoud);
  }
  if(playThunder && thunderCount < 0) {
    rain.setVolume(rainQuiet);
    thunder.play();
    playThunder = false;
  }
  thunderCount--;

  // Visuals
  if(lightning > 0 && random() < .2) {
    background(255);
  } else {
    background(0);
  }
  bolt.draw();
  for(var i=0;i<sky.length;i++) {
    sky[i].draw();
  }
  lightning--;
}

// Flash and play delayed thunder on key pressed
function keyPressed() {
  lightning = 10;
  bolt = new Lightning();
  thunderCount = random(0, 60);
  playThunder = true;

}

// Cloud object
function Cloud(id) {
  this.layer = id*6/cloudCount;
  this.size = random(80, 150);
  this.x = random(-this.size, width);
  this.y = 100-random(0, this.size);
}
Cloud.prototype.draw = function() {
  noStroke();
  if(this.layer < 4 && lightning > 0 && random() > .5) {
    fill(255);
  } else {
    fill(10*this.layer, 200);
  }
  ellipse(this.x, this.y - 20*this.layer, this.size, this.size);
  this.x += this.layer;
  if(this.x > width+this.size) {
    this.x = -this.size;
  }
}

// Lightning object
function Lightning() {
  this.life = 60;
  var x = random(100, width-100);
  var y = 0;
  this.trail = [[x, y]];
  while(y < height) {
    x += (noise(x)-.5) * 200;
    y += noise(y)*30 + 50;
    this.trail.push([x, y]);
  }
}
Lightning.prototype.draw = function() {
  if(this.life <= 0) {
    return;
  }
  strokeWeight(5);
  stroke(255, this.life*4);
  for(var i=1;i<this.trail.length;i++) {
    line(this.trail[i-1][0], this.trail[i-1][1], this.trail[i][0], this.trail[i][1]);
  }
  strokeWeight(1);
  this.life--;
}