// Variables
var string;
var lines;

function preload() {
  lines = loadStrings("./old-faithful-2010.txt");
  print(lines.length);
}

// Run once at the start
function setup() {
  var canvas = createCanvas(200, 200);
  canvas.parent('sketch');
}

// Run forever after setup
function draw() {
}