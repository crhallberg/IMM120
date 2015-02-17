// Variables
var lines;

// Load images and sounds
function preload() {
  lines = loadStrings("./old-faithful-2010.txt");
}

// Run once at the start
function setup() {
  var canvas = createCanvas(200, 200);
  canvas.parent('sketch');

  print(lines);

  var max = 0;
  var maxDate = "";
  var maxWait = "";
  for(var i=3;i<lines.length-1;i++) {
    var parts = lines[i].split(',');
    var date = parts[0];
    var wait = trim(parts[1]);
    var simple = wait.replace(/:/g, '');
    var time = parseInt(simple);
    if (time > max) {
      max = time;
      maxWait = wait;
      maxDate = date;
    }

    if(wait == '0:00:00') {
      console.log("zero time", wait);
    }
    if(date.match(':00:00')) {
      console.log("ON THE HOUR", date);
    }
  }
  print(maxDate, maxWait);
}

// Run forever after setup
function draw() {
}