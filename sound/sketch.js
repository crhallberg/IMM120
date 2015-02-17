// Variables
var laser;

function preload()
{
	laser = loadSound("./laser.ogg");
}

function setup() {
  // Set size
  var canvas = createCanvas(200, 200);
  canvas.parent('sketch');
	background(200);
	
	textAlign(CENTER);
	text("Click Me", width/2, height/2);
}

function mouseClicked()
{
	laser.play();
	print("Pew!");
}