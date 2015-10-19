// Variables
var music;

// Runs first and loads all files
function preload() {
    music = loadSound("audio/YDKJ2011-Intermission.mp3");    
}

// Runs first and once
function setup() {
    createCanvas(640, 480); // size
}

// Loops forever
function draw() {
    background(102);
    // and other magic
    music.play();
}
    
function keyPressed() {    
    music.setVolume(0);
}