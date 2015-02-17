var calculus = function(sketch) {
  var gravity = .5;
  var velocity = [0];
  var position = [0];
  var pli = 0, loopingIndex = 1;

  sketch.setup = function() {
    with(sketch) {
      createCanvas(300, 550).parent("calculus");
      textAlign(CENTER, CENTER);
      textFont("Courier");
      textSize(14);
    }
  }

  sketch.draw = function() {
    with(sketch) {
      background(255);

      fill(240);
      stroke(100);
      rect(-5, 150, width+10, 50);
      rect(-5, 350, width+10, 50);

      noStroke();
      fill(0);
      textAlign(CENTER);
      text("- is an integral of -", width/2, 180);
      text("- is an integral of -", width/2, 380);

      textAlign(LEFT);
      text("Acceleration (Gravity)", 4, 14);
      text("Velocity (Speed)", 4, 214);
      text("Position", 4, 414);

      stroke(100);
      line(0, 275, width, 275);
      stroke(0);

      // Draw dots
      var i = loopingIndex;
      for(var x=width-position.length;x<width;x++) {
        point(x, 275+velocity[i]);
        point(x, 400+position[i]);
        point(x, 100+gravity);
        i = (i + 1) % width;
      }

      // Add gravity to velocity
      velocity[loopingIndex] = velocity[pli] + gravity;
      // Add velocity to position
      position[loopingIndex] = position[pli] + velocity[loopingIndex];
      // Bounce check
      if(position[loopingIndex] > 200) {
        position[loopingIndex] = 200;
        velocity[loopingIndex] *= -1;
      }

      // Array management
      pli = loopingIndex;
      loopingIndex = (loopingIndex+1)%width;
    }
  }
}
new p5(calculus);