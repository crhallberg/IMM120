// Variables
var cars = []; // List of cars
var stripes = []; // List of stripes
var laser;

function preload()
{
	laser = loadSound("./laser.ogg");
}

function setup() {
  // Set size
  var canvas = createCanvas(900, 400);
  canvas.parent('sketch');
	
	// Define two cars
	cars[0] = new Car(100, 2, 0);
	cars[cars.length] = new Car(350, -2, cars.length);
	cars[cars.length] = new Car(550,  2, cars.length);
	cars[cars.length] = new Car(750, -2, cars.length);
	
	stripes[0] = new Line(width/2);
}

function draw() {
  background(255);
	
	// Draw all of my stripes
	for(var i=0;i<stripes.length;i++) {
		stripes[i].draw();
	}
	
	// Draw all of my cars
	for(var i=0;i<cars.length;i++) {
		cars[i].move();
		cars[i].draw();
	}
}

// Definition of a car
function Car(x, speed, id) // Car constructor where I set the properties
{
	// Properties of my car
	this.id = id;
	
	this.x = x;
	this.y = height/2;
	this.w = 100;
	this.h = 60;
	
	this.speed = speed;
}
// Tell the Cars how to move themselves
Car.prototype.move = function() {
	this.x += this.speed;
	
	// Border check
	if(this.x < 0 || this.x+this.w > width) this.speed = -this.speed;
	
	for(var i=0;i<cars.length;i++) {
		if(this.id !== i) {
			if(insideRectangle(this.x+this.w, this.y+this.h/2, cars[i].x, cars[i].y, cars[i].w, cars[i].h)) {
				print("Hit on right");
				laser.play();
				this.speed = -this.speed;
				cars[i].speed = -cars[i].speed;
			}
		}
	}
}

// Tell the Cars how to draw themselves
Car.prototype.draw = function() {
	// Save so I can reset
	push();
	
	// Move to where my car is
	translate(this.x, this.y);
	// Draw the body
	fill(50, 50, 200);
	rect(0, 0, this.w, this.h);
	// Draw the tires
	fill(255);
	stroke(0);
	strokeWeight(10);
	ellipse(25, this.h, 20, 20);
	ellipse(this.w-25, this.h, 20, 20);
	
	// Contact point
	noStroke();
	fill(255,0,0);
	ellipse(this.w, this.h/2, 8, 8);
	
	// Reset position
	pop();
}

function Line(x) {
	this.x = x;
	this.on = false;
	
	this.lastCarId = false;
}
Line.prototype.draw = function() {
	// Check the cars
	for(var i=0;i<cars.length;i++) {
		// if car is over the line
		if( this.lastCarId !== cars[i].id   && cars[i].x < this.x && cars[i].x+cars[i].w > this.x) {
			this.on = !this.on;
			this.lastCarId = cars[i].id;
		}
	}

	stroke(50);
	strokeWeight(3);
	line(this.x, 0, this.x, height);
	if(this.on) {
		fill(50,255,50);
	} else {
		fill(255,50,50);
	}
	ellipse(this.x, 100, 100, 100);
}

function insideRectangle(checkX, checkY, rectX, rectY, rectW, rectH) {
	return checkX > rectX && checkX < rectX+rectW && checkY > rectY && checkY < rectY+rectH;
}