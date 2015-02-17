var nicholas = function(sketch) {

// Variables


//var r = [random(0, 255), random(0, 255), random(0, 255)];

var speedx = [15 , 15];
var speedy = [15 , 15];

// Runs first, before setup
sketch.preload = function() { with(sketch) {
  // Great place to load images
}
}

// Runs once at start of code
sketch.setup = function() { with(sketch) {
  // Set size
  var canvas = createCanvas(720, 720);
  canvas.parent('nicholas');


}
}

sketch.draw = function() { with(sketch) {
  // Forever loop
  background(0);

  ellipse(width/2, height/2, 720, 720);

stroke(0);
strokeWeight(4);
line(width/2+cos(PI)*350, height/2+sin(PI)*350, width/2+cos(PI)*300, height/2+sin(PI)*300);//900

line(width/2+cos(PI)*-350, height/2+sin(PI)*-350, width/2+cos(PI)*-300, height/2+sin(PI)*-300);//300

line(width/2+cos(HALF_PI)*-350, height/2+sin(HALF_PI)*-350, width/2+cos(HALF_PI)*-300, height/2+sin(HALF_PI)*-300);//1200

line(width/2+cos(HALF_PI)*350, height/2+sin(HALF_PI)*350, width/2+cos(HALF_PI)*300, height/2+sin(HALF_PI)*300);//600

line(width/2+cos(.6*QUARTER_PI)*350, height/2+sin(.6*QUARTER_PI)*350, width/2+cos(.6*QUARTER_PI)*340, height/2+sin(.6*QUARTER_PI)*340);

line(width/2+cos(.6*QUARTER_PI)*-350, height/2+sin(.6*QUARTER_PI)*-350, width/2+cos(.6*QUARTER_PI)*-340, height/2+sin(.6*QUARTER_PI)*-340);

line(width/2+cos(.6*-QUARTER_PI)*350, height/2+sin(.6*-QUARTER_PI)*350, width/2+cos(.6*-QUARTER_PI)*340, height/2+sin(.6*-QUARTER_PI)*340);

line(width/2+cos(.6*-QUARTER_PI)*-350, height/2+sin(.6*-QUARTER_PI)*-350, width/2+cos(.6*-QUARTER_PI)*-340, height/2+sin(.6*-QUARTER_PI)*-340);

line(width/2+cos(.3*QUARTER_PI + QUARTER_PI)*350, height/2+sin(.3*QUARTER_PI + QUARTER_PI)*350, width/2+cos(.3*QUARTER_PI + QUARTER_PI)*340, height/2+sin(.3*QUARTER_PI + QUARTER_PI)*340);

line(width/2+cos(.3*QUARTER_PI + QUARTER_PI)*-350, height/2+sin(.3*QUARTER_PI + QUARTER_PI)*-350, width/2+cos(.3*QUARTER_PI + QUARTER_PI)*-340, height/2+sin(.3*QUARTER_PI + QUARTER_PI)*-340);

line(width/2+cos(.3*-QUARTER_PI - QUARTER_PI)*350, height/2+sin(.3*-QUARTER_PI - QUARTER_PI)*350, width/2+cos(.3*-QUARTER_PI - QUARTER_PI)*340, height/2+sin(.3*-QUARTER_PI - QUARTER_PI)*340);

line(width/2+cos(.3*-QUARTER_PI - QUARTER_PI)*-350, height/2+sin(.3*-QUARTER_PI - QUARTER_PI)*-350, width/2+cos(.3*-QUARTER_PI - QUARTER_PI)*-340, height/2+sin(.3*-QUARTER_PI - QUARTER_PI)*-340);



stroke(0,0,255);//hours: only ticks on the hour
strokeWeight(25);
  line(360, 360, width/2+cos(hour()/12 *TAU - HALF_PI) *100, height/2+sin(hour()/12 *TAU - HALF_PI) *100);

stroke(0,255,0);//minutes
strokeWeight(15);
  line(360, 360, width/2+cos(minute()/60*TAU - HALF_PI)*200, height/2+sin(minute()/60*TAU - HALF_PI)*200);


stroke(255,0,0);//seconds
strokeWeight(5);

  line(360, 360, width/2+cos(second()/60*TAU - HALF_PI)*340, height/2+sin(second()/60*TAU - HALF_PI)*340);








}
}

};

new p5(nicholas);
