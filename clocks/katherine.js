var katherine = function(sketch) {

// Variables

// Runs first, before setup
sketch.preload = function() { with(sketch) {
  // Great place to load images
}
}

// Runs once at start of code
sketch.setup = function() { with(sketch) {
  // Set size
  var canvas = createCanvas(800, 400);
  canvas.parent('katherine');
  angleMode(DEGREES);
}
}

sketch.draw = function() { with(sketch) {
  // Forever loop
  // Variables
s = second ();
m = minute ();
h = hour ();

  strokeWeight(4);
  fill (100,200,130);
ellipse(400,200, 700, 400);
fill(153);

textSize(22);
fill(153);
text("12",600,300);

textSize(30);
fill(153);
text ("7", 578,290);

textSize(30);
fill (153);
text("5", 560, 310);

textSize(28)
fill(153);
text("8", 550, 270);

textSize(32);
fill(153);
text("1", 530, 330);

textSize(40);
fill(153);
text("3",550, 340);

textSize(28);
fill (153);
text("9", 520, 364);

textSize(48);
fill (153);
text("2", 440, 350);

textSize(90);
fill(0);
text("4", 470,300);

textSize(34);
fill(0);
text("11", 590, 350);

textSize(55);
fill(0);
text ("6", 630, 320);

textSize(30);
fill(0);
text("10", 470, 360);

push();
translate (width/2, height/2);
rotate((second()/60)*360);
line (0,0,0,-200);
pop();

push();
translate (width/2, height/2);
rotate((minute()/60)*360);
line (0,0,0,-150);
pop();

push();
translate (width/2, height/2);
rotate((hour()/12)*360);
line (0,0,0, -100);
pop();


fill (100,20,50);
ellipse(400, 200, 10,10);



}
}

};

new p5(katherine);
