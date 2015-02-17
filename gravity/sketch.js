// Variables
var steve;
var SOUND;

var snacks = [];

// Load images and sounds
function preload() {
	SOUND = loadSound('./laser.ogg');
}

// Run once at the start
function setup() {
  var canvas = createCanvas(800, 600);
  canvas.parent('sketch');

  steve = new Ball();

  for(var i=0;i<25;i++) {
  	snacks.push(new Food());
  }

  for(var i=0;i<100;i++) {
	pleasePrint(i, 7);
  }
}
function pleasePrint(number, num2) {
	print(number, num2);
}

function mouseClicked() {
	steve.x = 5;
	steve.y = mouseY;

}

function keyPressed() {
	if(keyCode == UP_ARROW) {
		if(steve.onLand) {
		 	steve.speedy = -23;
		 	steve.onLand = false;
		}
	}
}

// Run forever after setup
function draw() {
	background(255);

  for(var i=0;i<snacks.length;i++) {
  	if(isInsideCircle(steve.x, steve.y, snacks[i].x, snacks[i].y, snacks[i].r)) {
  	  	snacks[i] = new Food();
  	  	SOUND.play();
  	}
  	snacks[i].draw();
  }

  steve.draw();
}

function Ball() {
	this.x = 20;
	this.y = height/2;
	this.speedx = 5;
	this.speedy = 0;
	this.onLand = false;
}
Ball.prototype.draw = function() {
	this.x = this.x + this.speedx;
	this.y += this.speedy;
	if(this.y > 550) {
		this.y = 551;
		this.speedy = 0;
		this.onLand = true;
	} else {
		this.speedy += .6;
	}	

	if(!isInsideRect(this.x, this.y, 0, 0, width, height)) {
		if(this.x < 0 || this.x > width) {
			this.speedx = -this.speedx;
		}
		if(this.y < 0 || this.y > height) {
			this.speedy = -this.speedy;
		}
	}

	if(isInsideRect(this.x, this.y, 640, 300, 50, 50)) {
		SOUND.play();
		print("HIT");
		print(this.speedy);
	}

	fill(0);
	ellipse(this.x, this.y, 30, 30);
};



function isInsideRect(x, y, rectX, rectY, rectWidth, rectHeight)
{
	return x > rectX && x < rectX+rectWidth && y > rectY && y < rectY+rectHeight;
}




// http://crhallberg.com/notes/collision

function isInsideCircle(x, y, circleX, circleY, circleR) {
	return dist(x,y,circleX,circleY) < circleR/2;
}

function Food() {
	this.x = random(0, width);
	this.y = random(0, height);
	this.r = random(50, 200);
}
Food.prototype.draw = function() {
	fill(100, 200, 255);
	ellipse(this.x, this.y, this.r, this.r);
}
















