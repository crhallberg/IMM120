var dylan = function(sketch) {

// Variables


// Runs first, before setup
sketch.preload = function() { with(sketch) {
  // Great place to load images
}
}

// Runs once at start of code
sketch.setup = function() { with(sketch) {
  // Set size
  var canvas = createCanvas(300, 300);
  canvas.parent('dylan');
  angleMode(DEGREES);
  frameRate(6);
}
}

sketch.draw = function() { with(sketch) {
  // Forever loop

  background(255);

  fill(0);
  ellipse(152, 145, 255, 255);
  fill(255);
  ellipse(152, 145, 200, 200);

  push();
  stroke(0,255,0);
  strokeWeight(7);
  translate(width/2, height/2);
  rotate(frameCount/3600);
  line(0,0,0,-75);
  pop();

  push();
  stroke(0,0,255);
  strokeWeight(4);
  translate(width/2, height/2);
  rotate(frameCount/60);
  line(0,0,0,-100);
  pop();

  push();
  stroke(255,0,0);
  translate(width/2, height/2);
  rotate(frameCount);
  line(0,0,0,-100);
  pop();

  stroke(255);
  text("12", 143, 35);
  text("3", 265, 153);
  text("6", 145, 265);
  text("9", 35, 153);







}
}

};

new p5(dylan);
