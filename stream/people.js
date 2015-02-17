// Variables

function setup() {
  // Set size
  var canvas = createCanvas(600, 400);
  canvas.parent('sketch');
  
  fill(255);
  noStroke();
  textAlign(CENTER);
  textSize(36);

  var bob = new Person("Bob", "Smith", 27);
  var sam = new Person("Sam", "Jones", 12);
  var martha = new Person("Martha", "Green", 111);
  
  print(bob.fullName());
  print(sam.fullName());
  print(martha.fullName());
  
}

function draw() {
  background(0,0,0,60);
  translate(width/2, height/2);
  rotate(frameCount / 200);
  text("Welcome!", 0, 0);
}

// Class, definition or blueprint
function Person(fn, ln, a) // Person constructor
{
  this.firstName = fn;
  this.lastName = ln;
  this.age = a;
}
Person.prototype.fullName = function() {
  return this.lastName + ", " + this.firstName;
}