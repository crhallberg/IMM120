// Variables
var music, ding;

function preload() {
  music = loadSound('audio/YDKJ2011-Intermission.mp3');
  ding = loadSound('audio/ding.mp3');
}

// Runs first and once
function setup() {
  createCanvas(640, 480); // size
  music.loop();
}

// Loops forever
function draw() {
  background(102);
  music.setVolume(mouseY/height); // Set music volume to mouseY
}

function mousePressed() {
  ding.play();
}
